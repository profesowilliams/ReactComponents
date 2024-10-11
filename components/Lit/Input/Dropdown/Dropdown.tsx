import { LitElement, html, css, TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import '../Text'; // Import the TextInput component

@customElement('tds-dropdown')
export class Dropdown extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
      position: relative;
    }
    .dropdown-button {
      background-color: #ffffff;
      border: 1px solid #cccccc;
      border-radius: 4px;
      padding: 8px 12px;
      cursor: pointer;
      font-size: 1rem;
      width: 100%;
      box-sizing: border-box;
    }
    .dropdown-list {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background-color: #ffffff;
      border: 1px solid #cccccc;
      border-radius: 4px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      max-height: 200px;
      overflow-y: auto;
      z-index: 10;
    }
    .dropdown-item {
      padding: 8px 12px;
      cursor: pointer;
    }
    .dropdown-item:hover {
      background-color: #f0f0f0;
    }
    .hidden {
      display: none;
    }
  `;

  @property({ type: Array })
  options: string[] = [];

  @property({ type: String })
  selected: string = '';

  @property({ type: Boolean })
  typeahead = false;

  @property({ type: String })
  id = 'floatingInput';

  @property({ type: String })
  label = 'Select an option';

  @property({ type: String })
  placeholder = 'Start typing...';

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

  @property({ type: String })
  value = '';

  @state()
  private isOpen = false;

  @state()
  private filterText = '';

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener('click', this.handleOutsideClick);
  }

  disconnectedCallback() {
    document.removeEventListener('click', this.handleOutsideClick);
    super.disconnectedCallback();
  }

  private handleOutsideClick = (event: MouseEvent): void => {
    const path = event.composedPath();
    if (!path.includes(this)) {
      this.closeDropdown();
    }
  };

  render(): TemplateResult {
    const filteredOptions = this.filterText
      ? this.options.filter((option) =>
          option.toLowerCase().includes(this.filterText.toLowerCase())
        )
      : this.options;

    return html`
      <div class="dropdown">
        ${this.typeahead
          ? html`
              <tds-textfield
                id="${this.id}"
                .value="${this.filterText || this.selected}"
                .label="${this.label}"
                .placeholder="${this.placeholder}"
                .supporttext="${this.supporttext}"
                ?disabled="${this.disabled}"
                ?required="${this.required}"
                .pattern="${this.pattern}"
                .minLength="${this.minLength}"
                .maxLength="${this.maxLength}"
                .size="${this.size}"
                @input="${this.onFilterInput}"
                @focus="${this.openDropdown}"
              ></tds-textfield>
            `
          : html`
              <div class="dropdown-button" @click="${this.toggleDropdown}">
                ${this.selected || 'Select an option'}
              </div>
            `}
        <div class="dropdown-list ${this.isOpen ? '' : 'hidden'}">
          ${filteredOptions.length > 0
            ? filteredOptions.map(
                (option) => html`
                  <div
                    class="dropdown-item"
                    @click="${() => this.selectOption(option)}"
                  >
                    ${option}
                  </div>
                `
              )
            : html`<div class="dropdown-item">No options found</div>`}
        </div>
      </div>
    `;
  }

  private toggleDropdown(): void {
    this.isOpen = !this.isOpen;
  }

  private openDropdown(): void {
    this.isOpen = true;
  }

  private closeDropdown(): void {
    this.isOpen = false;
  }

  private onFilterInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.filterText = input.value;

    // If the input is cleared, show all options
    if (this.filterText === '') {
      this.isOpen = true; // Keep the dropdown open
    }
  }

  private selectOption(option: string): void {
    this.selected = option;
    this.filterText = ''; // Clear the filterText to show all options next time
    this.closeDropdown(); // Close the dropdown after selection
    this.dispatchEvent(
      new CustomEvent('option-selected', {
        detail: { value: option },
      })
    );
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'tds-dropdown': Dropdown;
  }
}
