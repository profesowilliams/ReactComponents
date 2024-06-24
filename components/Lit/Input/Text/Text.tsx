import { LitElement, html, css, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import customStyles from './Text.scss?inline';

@customElement('tds-textfield')
export class TextInput extends LitElement {
  static get styles() {
    return css`
      ${unsafeCSS(customStyles)}
    `;
  }

  constructor() {
    super();
  }
  
  // Define allowed input types
  @property({ type: String }) placeholder = 'name@example.com';
  @property({ type: String }) label = 'Email address';
  @property({ type: String }) type: 'hidden' | 'text' | 'search' | 'tel' | 'url' | 'email' | 'password' | 'datetime' | 'date' | 'month' | 'week' | 'time' | 'datetime-local' | 'number' | 'range' | 'color' | 'checkbox' | 'radio' | 'file' | 'submit' | 'image' | 'reset' | 'button' = 'email';
  @property({ type: String }) id = 'floatingInput';
  @property({ type: String }) supporttext?: string;
  @property({ type: Boolean }) required = false;
  @property({ type: Boolean }) disabled = false; // Add disabled property

  private getLabel() {
    return this.required ? `* ${this.label}` : this.label;
  }

  render() {
    return html`
      <div class="form-floating mb-3">
        <input type="${this.type}" class="form-control" id="${this.id}" placeholder="${this.placeholder}" ?disabled="${this.disabled}" ?required="${this.required}" />
        <!-- Use disabled property -->
        ${this.supporttext ? html`<div class="form-text" id="basic-addon4">${this.supporttext}</div>` : ''}
        <label for="${this.id}">${this.getLabel()}</label>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'tds-textfield': TextInput;
  }
}
