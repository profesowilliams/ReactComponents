import { LitElement, html, css, unsafeCSS } from "lit";
import "../../Close";
import customStyles from "./ModalClose.scss?inline";

class ModalClose extends LitElement {
  static get styles() {
    return css`
      ${unsafeCSS(customStyles)}
    `;
  }

  render() {
    return html`
      <tds-close-button
        data-bs-dismiss="modal"
        @close="${this._onClose}"
      ></tds-close-button>
    `;
  }

  private _onClose(event: CustomEvent) {
    console.log(event.detail.message);
    // Add any additional modal close logic here
  }
}

customElements.define("tds-modal-close", ModalClose);
