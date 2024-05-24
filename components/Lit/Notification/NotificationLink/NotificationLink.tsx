// src/components/Lit/Notification/NotificationLink/NotificationLink.tsx
import { LitElement, html, css, unsafeCSS } from "lit";
import { property } from 'lit/decorators.js';
import customStyles from "./NotificationLink.scss?inline";
import '../../Button';

export class NotificationLink extends LitElement {
  static get styles() {
    return css`
      ${unsafeCSS(customStyles)}
    `;
  }

  @property({ type: String }) url: string = '';

  render() {
    return html`
      <tds-button
        type="link"
        variant="link"
        theme="light"
        label="Button"
        color="cobalt"
        url="${this.url}"
      >
        <slot></slot>
      </tds-button>
      `;
  }
}

customElements.define("tds-notification-link", NotificationLink);
