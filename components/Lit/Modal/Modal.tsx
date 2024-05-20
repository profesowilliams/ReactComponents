// src/components/lit/modal.ts
import { LitElement, html, css, unsafeCSS, PropertyValues } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { customElement, property } from "lit/decorators.js";
import customStyles from "./Modal.scss?inline";

@customElement("tds-modal")
export class Modal extends LitElement {
  static styles = css`
    ${unsafeCSS(customStyles)}
  `;

  @property({ type: Boolean, reflect: true }) show: boolean = false;
  @property({ type: Boolean, reflect: true }) fade: boolean = false;
  @property({ type: Boolean }) backdrop: boolean | "static" = false;
  @property({ type: String }) size: string = "md";
  @property({ type: Boolean, reflect: true }) centered: boolean = false;
  @property({ type: Boolean, reflect: true }) fullscreen: boolean = false;
  @property({ type: Boolean, reflect: true }) scrollable: boolean = false;
  @property({ type: String }) dialogClassName: string = "";
  @property({ type: String }) contentClassName: string = "";
  @property({ type: String }) backdropClassName: string = "";

  constructor() {
    super();
  }

  updated(changedProperties: PropertyValues) {
    super.updated(changedProperties);
    if (changedProperties.has("backdrop")) {
      this._updateBackdropClass();
    }
  }

  _updateBackdropClass() {
    if (this.backdrop === true || this.backdrop === "static") {
      this.classList.add("modal-backdrop");
    } else {
      this.classList.remove("modal-backdrop");
    }
  }

  render() {
    const modalClasses = {
      modal: true,
      [`modal-${this.size}`]: true,
      fade: this.fade,
      show: this.show,
    };

    return html`
      <div
        id="modal"
        class=${classMap(modalClasses)}
        tabindex="-1"
        role="dialog"
      >
        <div
          class="modal-dialog ${this.centered
            ? "modal-dialog-centered"
            : ""} ${this.scrollable ? "modal-dialog-scrollable" : ""}"
        >
          <div class="modal-content ${this.contentClassName}">
            <slot></slot>
          </div>
        </div>
      </div>
    `;
  }
}

export default Modal;
