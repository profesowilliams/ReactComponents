import { LitElement, html, css, TemplateResult, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import customStyles from './File.scss?inline';
import './FileClose';

@customElement('tds-file-input')
export class FileInput extends LitElement {
  static get styles() {
    return css`
      ${unsafeCSS(customStyles)}
    `;
  }

  @property({ type: Array })
  files: File[] = [];

  @property({ type: Boolean })
  isDragOver = false;

  @property({ type: Number })
  maxFileSize = 2 * 1024 * 1024; // Default to 2 MB

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
            <tds-icon name="upload" state="default"></tds-icon>
            <div class="file-text">
              <tds-heading as="h10">
                <strong>Drag & Drop or Choose file from device</strong>
              </tds-heading>
              <p class="extra-small">
                PDF, Max file size of ${this.formatFileSize(this.maxFileSize)}.
              </p>
            </div>
            <tds-button
              type="button"
              variant="filled"
              theme="light"
              label="Button"
              color="teal"
            >
              Browse file
            </tds-button>
          </div>
        </div>
        ${this.files.length > 0
          ? html`
              <div class="file-list">
                ${this.files.map(
                  (file, index) => html`
                    <div class="file-item">
                      <div>
                        <div class="file-name">${file.name}</div>
                        <div class="file-size">
                          ${this.formatFileSize(file.size)}
                        </div>
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
    fileInput.addEventListener('change', this.handleFileSelect.bind(this));
    fileInput.click();
  }

  private handleFileSelect(event: Event): void {
    const input = event.target as HTMLInputElement;
    const selectedFiles = Array.from(input.files || []);
    this.addFiles(selectedFiles);
  }

  private addFiles(newFiles: File[]): void {
    const validFiles = newFiles.filter((file) => {
      if (file.size > this.maxFileSize) {
        this.showFileSizeError(file);
        return false;
      }
      return true;
    });

    this.files = [...this.files, ...validFiles];
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

  private showFileSizeError(file: File): void {
    alert(
      `The file "${
        file.name
      }" exceeds the maximum file size of ${this.formatFileSize(
        this.maxFileSize
      )}.`
    );
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'tds-file-input': FileInput;
  }
}
