import { LitElement, html, css, TemplateResult, unsafeCSS } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import customStyles from './Dropdown.scss?inline';

@customElement('tds-dropdown')
export class Dropdown extends LitElement {
  static get styles() {
    return css`
      ${unsafeCSS(customStyles)}
    `;
  }

  @property({ type: Array })
  options: string[] = [];

  @property({ type: Array })
  selected: string[] = [];

  @property({ type: Boolean })
  typeahead = false;

  @property({ type: String })
  id = 'floatingInput';

  @property({ type: String })
  supporttext?: string;

  @property({ type: Boolean })
  required = false;

  @property({ type: Boolean })
  disabled = false;

  @property({ type: String })
  pattern = '';

  @property({ type: Number })
  minLength?: number;

  @property({ type: Number })
  maxLength?: number;

  @property({ type: Number })
  size?: number;

  @property({ type: Function })
  loadOptions?: () => Promise<string[]>;

  @property({ type: String })
  label = 'Select an option';

  @state()
  private isOpen = false;

  @state()
  private filterText = '';

  @state()
  private errorMessage: string | null = null;

  @state()
  private focusedIndex: number = -1;

  private debounceTimer: number | undefined;

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener('mousedown', this.handleOutsideClick);
    this.fetchOptions();
  }

  disconnectedCallback() {
    document.removeEventListener('mousedown', this.handleOutsideClick);
    super.disconnectedCallback();
  }

  render(): TemplateResult {
    const filteredOptions = this.options.filter((option) =>
      option.toLowerCase().includes(this.filterText.toLowerCase())
    );

    return html`
      <div class="form-floating mb-3" @mousedown="${this.stopPropagation}">
        ${this.typeahead
          ? html`
              <input
                type="text"
                class="typeahead-input form-control"
                id="${this.id}"
                .value="${this.filterText}"
                placeholder="${this.label}"
                @input="${this.onFilterInput}"
                @focus="${this.openDropdown}"
                @keydown="${this.handleKeyDown}"
                .pattern="${this.pattern}"
                minlength="${this.minLength}"
                maxlength="${this.maxLength}"
                size="${this.size}"
                ?disabled="${this.disabled}"
                ?required="${this.required}"
                aria-expanded="${this.isOpen}"
                aria-haspopup="listbox"
                aria-owns="dropdown-list"
                aria-activedescendant="${`option-${this.focusedIndex}`}"
              />
            `
          : html`
              <div
                class="dropdown-button form-control"
                @click="${this.toggleDropdown}"
                role="combobox"
                aria-expanded="${this.isOpen}"
                aria-haspopup="listbox"
                ?disabled="${this.disabled}"
              >
                ${this.selected.length
                  ? this.selected.join(', ')
                  : 'Select an option'}
              </div>
            `}
        <label for="${this.id}">
          ${this.required ? `* ${this.label}` : this.label}
        </label>
        ${this.supporttext
          ? html`<div class="form-text">${this.supporttext}</div>`
          : ''}
        ${this.errorMessage
          ? html`<div class="error">${this.errorMessage}</div>`
          : ''}
        <div
          class="dropdown-list ${this.isOpen ? '' : 'hidden'}"
          id="dropdown-list"
          role="listbox"
        >
          <slot name="option-template">
            ${filteredOptions.length > 0
              ? filteredOptions.map(
                  (option, index) => html`
                    <div
                      class="dropdown-item ${index === this.focusedIndex
                        ? 'focused'
                        : ''}"
                      role="option"
                      id="option-${index}"
                      aria-selected="${this.selected.includes(option)}"
                      @click="${() => this.selectOption(option)}"
                    >
                      ${option}
                    </div>
                  `
                )
              : html`<div class="dropdown-item">No options found</div>`}
          </slot>
        </div>
      </div>
    `;
  }

  private toggleDropdown(): void {
    this.isOpen = !this.isOpen;
    this.dispatchEvent(
      new CustomEvent(this.isOpen ? 'dropdown-opened' : 'dropdown-closed')
    );
  }

  private openDropdown(): void {
    this.isOpen = true;
    this.dispatchEvent(new CustomEvent('dropdown-opened'));
  }

  private closeDropdown(): void {
    this.isOpen = false;
    this.dispatchEvent(new CustomEvent('dropdown-closed'));
    this.focusedIndex = -1; // Reset focused index when closing
  }

  private onFilterInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    clearTimeout(this.debounceTimer);
    this.debounceTimer = window.setTimeout(() => {
      this.filterText = input.value;
      this.openDropdown();
      this.focusedIndex = 0; // Focus the first option when typing
    }, 300); // 300ms debounce time
  }

  private selectOption(option: string): void {
    if (this.selected.includes(option)) {
      this.selected = this.selected.filter((item) => item !== option);
    } else {
      if (this.typeahead) {
        this.selected = [option];
        this.filterText = option;
      } else {
        this.selected = [...this.selected, option];
      }
    }
    this.closeDropdown();
    this.dispatchEvent(
      new CustomEvent('options-selected', {
        detail: { values: this.selected },
      })
    );
    this.validate();
  }

  private handleOutsideClick = (event: MouseEvent) => {
    if (!this.contains(event.target as Node)) {
      this.closeDropdown();
    }
  };

  private stopPropagation(event: MouseEvent) {
    event.stopPropagation();
  }

  private handleKeyDown(event: KeyboardEvent): void {
    const filteredOptions = this.options.filter((option) =>
      option.toLowerCase().includes(this.filterText.toLowerCase())
    );

    if (!this.isOpen) {
      // Open the dropdown if not already open
      this.openDropdown();
      if (event.key === 'ArrowDown' && filteredOptions.length > 0) {
        // Focus the first option when pressing ArrowDown
        this.focusedIndex = 0;
        return;
      }
    }

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        this.focusNextOption(filteredOptions.length);
        break;
      case 'ArrowUp':
        event.preventDefault();
        this.focusPreviousOption(filteredOptions.length);
        break;
      case 'Enter':
        event.preventDefault();
        if (
          this.focusedIndex >= 0 &&
          this.focusedIndex < filteredOptions.length
        ) {
          this.selectOption(filteredOptions[this.focusedIndex]);
        }
        break;
      case 'Escape':
        this.closeDropdown();
        break;
    }
  }

  private focusNextOption(length: number) {
    this.focusedIndex = (this.focusedIndex + 1) % length;
  }

  private focusPreviousOption(length: number) {
    this.focusedIndex = (this.focusedIndex - 1 + length) % length;
  }

  private validate() {
    if (this.required && !this.selected.length) {
      this.errorMessage = 'This field is required.';
    } else {
      this.errorMessage = null;
    }
  }

  private async fetchOptions() {
    if (this.loadOptions) {
      this.options = await this.loadOptions();
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'tds-dropdown': Dropdown;
  }
}
