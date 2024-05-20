import { LitElement, html, css, unsafeCSS } from 'lit';
import '../ToastClose';
import customStyles from './ToastHeader.scss?inline';

export class ToastHeader extends LitElement {
  dismissType: string;

  static get styles() {
    return css`${unsafeCSS(customStyles)}`;
  }

  constructor() {
    super();
    this.dismissType = 'toast'; // Default value
  }

  render() {
    return html`
      <div class="toast-header">
        <div class="me-auto"><slot></slot></div>
        <tds-toast-close data-bs-dismiss="toast"></tds-toast-close>
      </div>
    `;
  }
}

customElements.define('tds-toast-header', ToastHeader);