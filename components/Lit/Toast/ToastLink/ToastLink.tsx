// src/components/Lit/Toast/ToastLink/ToastLink.tsx
import { LitElement, html, css, unsafeCSS } from "lit";
import customStyles from "./ToastLink.scss?inline";

export class ToastLink extends LitElement {
  static get styles() {
    return css`
      ${unsafeCSS(customStyles)}
    `;
  }

  render() {
    return html` <a class="toast-link" href="" target=""><slot></slot></a> `;
  }
}

customElements.define("tds-toast-link", ToastLink);
