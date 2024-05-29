import { LitElement, html, css, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import customStyles from './Textfield.scss?inline';

@customElement('tds-textfield')
export class Textfield extends LitElement {
  static get styles() {
    return css`
      ${unsafeCSS(customStyles)}
    `;
  }

  // Define allowed input types
  @property({ type: String }) placeholder = 'name@example.com';
  @property({ type: String }) label = 'Email address';
  @property({ type: String }) type: 'hidden' | 'text' | 'search' | 'tel' | 'url' | 'email' | 'password' | 'datetime' | 'date' | 'month' | 'week' | 'time' | 'datetime-local' | 'number' | 'range' | 'color' | 'checkbox' | 'radio' | 'file' | 'submit' | 'image' | 'reset' | 'button' = 'email';
  @property({ type: String }) id = 'floatingInput';

  render() {
    return html`
      <div class="form-floating mb-3">
        <input type="${this.type}" class="form-control" id="${this.id}" placeholder="${this.placeholder}" />
        <label for="${this.id}">${this.label}</label>
      </div>
    `;
  }
}
