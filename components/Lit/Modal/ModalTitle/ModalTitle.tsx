import { LitElement, html, css, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import title from './ModalTitle.scss?inline';

@customElement('tds-modal-title')
export class ModalTitle extends LitElement {
  static styles = css`${unsafeCSS(title)}`;

  render() {
    return html`
      <h5 class="modal-title">
        <slot></slot>
      </h5>
    `;
  }
}

export default ModalTitle;