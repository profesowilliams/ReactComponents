import { LitElement, html, css, TemplateResult, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import customStyles from './File.scss?inline';
import './FileClose';

interface FileUploadProgress {
  file: File;
  progress: number;
  error?: string; // Optional error message
}

@customElement('tds-file-input')
export class FileInput extends LitElement {
  static get styles() {
    return css`
      ${unsafeCSS(customStyles)}
    `;
  }

  @property({ type: Array })
  files: FileUploadProgress[] = [];

  @property({ type: Boolean })
  isDragOver = false;

  // Accept maxFileSize as a user-friendly string (e.g., "2MB" or "800KB")
  @property({ type: String })
  maxFileSize = '2MB'; // Default to 2MB

  @property({ type: String })
  apiEndpoint = ''; // API address property

  @property({ type: String })
  iconName = 'upload';

  @property({ type: String })
  iconState = 'default';

  @property({ type: String })
  headingText = 'Drag & Drop or Choose file from device';

  @property({ type: String })
  secondaryText = 'Max file size';

  @property({ type: String })
  buttonText = 'Browse file';

  @property({ type: Array })
  allowedFileTypes: string[] = ['application/pdf']; // Default to PDFs only

  private mimeTypeToLabel: Record<string, string> = {
    'application/pdf': 'PDF',
    'image/jpeg': 'JPEG',
    'image/png': 'PNG',
  };

  render(): TemplateResult {
    return html`
      <div class="file-input">
        <div class="file-upload">
          <label>Upload Template File</label>
          <div
            class=${classMap({ 'drop-area': true, dragover: this.isDragOver })}
            @dragover="${this.handleDragOver}"
            @dragenter="${this.handleDragEnter}"
            @dragleave="${this.handleDragLeave}"
            @drop="${this.handleDrop}"
            @click="${this.handleClick}"
          >
            <tds-icon
              name="${this.iconName}"
              state="${this.iconState}"
            ></tds-icon>
            <div class="file-text">
              <tds-heading as="h10">
                <strong>${this.headingText}</strong>
              </tds-heading>
              <p class="extra-small">
                ${this.formatAllowedFileTypes()}, ${this.secondaryText}:
                ${this.maxFileSize}.
              </p>
            </div>
            <tds-button
              type="button"
              variant="filled"
              theme="light"
              label="Button"
              color="teal"
            >
              ${this.buttonText}
            </tds-button>
          </div>
        </div>
        ${this.files.length > 0
          ? html`
              <div class="file-list">
                ${this.files.map(
                  (fileUpload, index) => html`
                    <div class="file-item">
                      <div class="file-progress">
                        <div class="file-name">${fileUpload.file.name}</div>
                        <div class="file-size">
                          ${this.formatFileSize(fileUpload.file.size)}
                        </div>
                        <div class="progress-bar">
                          <div
                            class="progress ${fileUpload.error
                              ? 'progress-error'
                              : ''}"
                            style="
      --progress-width: ${fileUpload.progress}%;
      background-color: ${fileUpload.error
                              ? '#cd163f'
                              : fileUpload.progress === 100
                              ? '#4caf50'
                              : '#F7B500'};
    "
                          ></div>
                          <span class="progress-percentage">
                            ${fileUpload.error
                              ? '0%'
                              : `${fileUpload.progress}%`}
                          </span>
                        </div>
                        ${fileUpload.error
                          ? html`<div class="error-message">
                              ${fileUpload.error}
                            </div>`
                          : ''}
                      </div>
                      <tds-file-close
                        @click="${() => this.removeFile(index)}"
                      ></tds-file-close>
                    </div>
                  `
                )}
              </div>
            `
          : ''}
      </div>
    `;
  }

  private formatAllowedFileTypes(): string {
    // Add a guard to ensure allowedFileTypes is defined
    const types = this.allowedFileTypes || [];
    return types.map((type) => this.mimeTypeToLabel[type] || type).join(', ');
  }

  private parseFileSize(size: string): number {
    const units: Record<string, number> = {
      B: 1,
      KB: 1024,
      MB: 1024 * 1024,
      GB: 1024 * 1024 * 1024,
    };
    const match = size.match(/^(\d+(?:\.\d+)?)\s*(B|KB|MB|GB)$/i);
    if (!match) throw new Error('Invalid file size format');
    const value = parseFloat(match[1]);
    const unit = match[2].toUpperCase();
    return value * (units[unit] || 1);
  }

  private handleDragOver(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
  }

  private handleDragEnter(event: DragEvent): void {
    event.preventDefault();
    this.isDragOver = true;
  }

  private handleDragLeave(event: DragEvent): void {
    event.preventDefault();
    this.isDragOver = false;
  }

  private handleDrop(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver = false;

    const droppedFiles = Array.from(event.dataTransfer?.files || []);
    this.addFiles(droppedFiles);
  }

  private handleClick(): void {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.multiple = true;
    fileInput.accept = this.allowedFileTypes.join(',');
    fileInput.addEventListener('change', this.handleFileSelect.bind(this));
    fileInput.click();
  }

  private handleFileSelect(event: Event): void {
    const input = event.target as HTMLInputElement;
    const selectedFiles = Array.from(input.files || []);
    this.addFiles(selectedFiles);
  }

  private async uploadFile(fileUpload: FileUploadProgress): Promise<void> {
    if (!this.apiEndpoint) {
      fileUpload.error = 'API endpoint is not configured';
      this.files = [...this.files];
      return;
    }

    const formData = new FormData();
    formData.append('file', fileUpload.file);

    try {
      const response = await fetch(this.apiEndpoint, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        fileUpload.error = errorData.message || 'Upload failed';
      } else {
        fileUpload.progress = 100; // Set progress to 100 on success
      }
    } catch (error) {
      fileUpload.error = 'Network error or server unavailable';
    } finally {
      this.files = [...this.files]; // Trigger re-render
    }
  }

  private addFiles(newFiles: File[]): void {
    const maxSizeInBytes = this.parseFileSize(this.maxFileSize);

    const validFiles = newFiles.map((file) => {
      if (!this.isFileTypeAllowed(file)) {
        return { file, progress: 0, error: 'Invalid file type.' };
      }
      if (file.size > maxSizeInBytes) {
        return { file, progress: 0, error: 'File size exceeds the limit.' };
      }
      return { file, progress: 0 };
    });

    this.files = [...this.files, ...validFiles];

    setTimeout(() => this.forceReflow(), 0);

    validFiles
      .filter((file) => !file.error)
      .forEach((file) => this.uploadFile(file));
  }

  private isFileTypeAllowed(file: File): boolean {
    return this.allowedFileTypes.includes(file.type);
  }

  private forceReflow(): void {
    const progressElements = this.shadowRoot?.querySelectorAll('.progress');
    progressElements?.forEach((el) => el.getBoundingClientRect());
  }

  private removeFile(index: number): void {
    this.files = this.files.filter((_, i) => i !== index);
  }

  private formatFileSize(size: number): string {
    if (size < 1024) {
      return `${size} bytes`;
    } else if (size < 1048576) {
      return `${(size / 1024).toFixed(2)} KB`;
    } else {
      return `${(size / 1048576).toFixed(2)} MB`;
    }
  }

  private simulateUploadProgress(files: FileUploadProgress[]): void {
    files.forEach((fileUpload) => {
      const interval = setInterval(() => {
        if (fileUpload.progress >= 100) {
          clearInterval(interval);
        } else {
          fileUpload.progress += 10;
          this.files = [...this.files];
        }
      }, 300);
    });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'tds-file-input': FileInput;
  }
}
