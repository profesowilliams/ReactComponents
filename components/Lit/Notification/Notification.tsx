import { LitElement, html, css, unsafeCSS, PropertyValues } from "lit";
import { property } from "lit/decorators.js";
import customStyles from "./Notification.scss?inline";

export class Notification extends LitElement {
  static styles = css`
    ${unsafeCSS(customStyles)}
  `;

  @property({ type: String }) id: string = "";
  @property({ type: String }) variant:
    | "default"
    | "alert"
    | "confirmation"
    | "error"
    | "information";
  @property({ type: Boolean }) dismissible: boolean = false;
  @property({ type: String }) message: string =
    "This is a default notification";
  @property({ type: Boolean }) show: boolean = false;

  constructor() {
    super();
    this.variant = "information";
    this.id = "default-notification";
    this.message = "This is a notification—check it out!";
  }

  updated(changedProperties: PropertyValues) {
    if (changedProperties.has("show")) {
      this.requestUpdate();
    }
  }

  render() {
    return html`
      <div
        role="alert"
        class="fade alert alert-${this.variant} ${this.show
          ? "show"
          : ""} ${this.dismissible ? "alert-dismissible" : ""}"
      >
        <slot></slot>
        ${this.dismissible
          ? html`
              <tds-close-button data-bs-dismiss="alert"></tds-close-button>
            `
          : ""}
      </div>
    `;
  }
}

export default Notification;
customElements.define("tds-notification", Notification);
