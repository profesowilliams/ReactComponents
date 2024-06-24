import { LitElement, html, css, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import customStyles from './Datalist.scss?inline';

@customElement('tds-datalist')
export class Datalist extends LitElement {
  static get styles() {
    return css`
      ${unsafeCSS(customStyles)}
    `;
  }

  @property({ type: Array }) options: Array<string> = [];
  @property({ type: String }) placeholder: string = '';
  @property({ type: String }) label = 'Label';
  @property({ type: String }) type: 'hidden' | 'text' | 'search' | 'tel' | 'url' | 'email' | 'password' | 'datetime' | 'date' | 'month' | 'week' | 'time' | 'datetime-local' | 'number' | 'range' | 'color' | 'checkbox' | 'radio' | 'file' | 'submit' | 'image' | 'reset' | 'button' = 'datalist';
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
        <input class="form-control" list="datalistOptions" id="${this.id}" placeholder="${this.placeholder}" ?disabled="${this.disabled}" ?required="${this.required}" />
        <label for="${this.id}">${this.getLabel()}</label>
        <datalist id="datalistOptions">${this.options.map((option) => html`<option value="${option}"></option>`)}</datalist>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'tds-datalist': Datalist;
  }
}

