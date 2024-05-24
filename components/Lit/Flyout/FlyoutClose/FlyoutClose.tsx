import { LitElement, html, css, unsafeCSS } from "lit";
import "../../Close";
import customStyles from "./FlyoutClose.scss?inline";

export class FlyoutClose extends LitElement {
  static get styles() {
    return css`
      ${unsafeCSS(customStyles)}
    `;
  }

  render() {
    return html`
      <tds-close-button
        data-bs-dismiss="offcanvas"
        @click="${this._onClick}"
      ></tds-close-button>
    `;
  }

  private _onClose(event: CustomEvent) {
    console.log(event.detail.message);
    // Add any additional flyout close logic here
  }

  private _onClick() {
    if (
      this.hasAttribute("data-bs-dismiss") &&
      this.getAttribute("data-bs-dismiss") === "offcanvas"
    ) {
      let flyoutElement: HTMLElement | null = this;
      while (flyoutElement && flyoutElement.tagName !== "TDS-FLYOUT") {
        if (flyoutElement.parentElement) {
          flyoutElement = flyoutElement.parentElement;
        } else if ((flyoutElement.getRootNode() as ShadowRoot).host) {
          flyoutElement = (flyoutElement.getRootNode() as ShadowRoot)
            .host as HTMLElement;
        } else {
          flyoutElement = null;
        }
      }

      if (flyoutElement) {
        if (flyoutElement.shadowRoot) {
          const flyoutContent = flyoutElement.shadowRoot.querySelector(
            ".offcanvas"
          ) as HTMLElement;
          if (flyoutContent) {
            flyoutContent.classList.remove("show");
            this.dispatchEvent(
              new CustomEvent("flyoutClosed", {
                detail: { flyout: flyoutContent },
              })
            );
          }
        }
      }
    }
  }
}

customElements.define("tds-flyout-close", FlyoutClose);
