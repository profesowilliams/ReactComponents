// src/components/Lit/Flyout/FlyoutFooter.tsx
import { LitElement, html, css, unsafeCSS } from "lit";
import customStyles from './FlyoutFooter.scss?inline';

export class FlyoutFooter extends LitElement {
  static get styles() {
    return css`
      ${unsafeCSS(customStyles)}
    `;
  }

  render() {
    return html` <div class="offcanvas-footer"><slot></slot></div> `;
  }
}

customElements.define('tds-flyout-footer', FlyoutFooter);
