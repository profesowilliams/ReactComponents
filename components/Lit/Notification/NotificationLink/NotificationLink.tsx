// src/components/Lit/Notification/NotificationLink/NotificationLink.tsx
import { LitElement, html, css, unsafeCSS } from "lit";
import customStyles from "./NotificationLink.scss?inline";

export class NotificationLink extends LitElement {
  static get styles() {
    return css`
      ${unsafeCSS(customStyles)}
    `;
  }

  render() {
    return html` <a class="notification-link" href="" target=""><slot></slot></a> `;
  }
}

customElements.define("tds-notification-link", NotificationLink);
