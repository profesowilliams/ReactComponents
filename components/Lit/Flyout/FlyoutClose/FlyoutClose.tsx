import { LitElement, html, css, unsafeCSS } from 'lit';
import '../../Close';
import customStyles from './FlyoutClose.scss?inline';

export class FlyoutClose extends LitElement {
  static get styles() {
    return css`
      ${unsafeCSS(customStyles)}
    `;
  }

  render() {
    return html`
      <tds-close-button data-bs-dismiss="offcanvas" @click="${this._onClick}">
      </tds-close-button>
    `;
  }

  private _onClick() {
    if (this.getAttribute('data-bs-dismiss') === 'offcanvas') {
      let flyoutElement: HTMLElement | null = this._findClosestFlyout();

      if (flyoutElement) {
        // Remove the 'show' attribute from the flyout
        if (flyoutElement.hasAttribute('show')) {
          flyoutElement.removeAttribute('show');
        }

        // Dispatch a custom event to signal the flyout was closed
        this.dispatchEvent(
          new CustomEvent('flyoutClosed', {
            detail: { flyout: flyoutElement },
            bubbles: true,
            composed: true,
          })
        );
      }
    }
  }

  // Helper function to find the closest tds-flyout parent
  private _findClosestFlyout(): HTMLElement | null {
    let element: HTMLElement | null = this;
    while (element && element.tagName !== 'TDS-FLYOUT') {
      if (element.parentElement) {
        element = element.parentElement;
      } else if ((element.getRootNode() as ShadowRoot).host) {
        element = (element.getRootNode() as ShadowRoot).host as HTMLElement;
      } else {
        return null;
      }
    }
    return element;
  }
}

customElements.define('tds-flyout-close', FlyoutClose);
