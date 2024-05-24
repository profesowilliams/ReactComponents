import { LitElement, html, css, unsafeCSS } from 'lit';
import { property } from 'lit/decorators.js';
import customStyles from './Flyout.scss?inline';

export class Flyout extends LitElement {
  @property({ type: String }) title = 'Offcanvas';
  @property({ type: Boolean, reflect: true }) show: boolean = false;
  @property({ type: String }) placement: 'start' | 'end' | 'top' | 'bottom' = 'start';

  static get styles() {
    return css`
      ${unsafeCSS(customStyles)}
    `;
  }

  render() {
    return html`
      <div class="offcanvas offcanvas-${this.placement} ${this.show ? 'show' : ''}" tabindex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
        <slot></slot>
      </div>
    `;
  }
}

customElements.define('tds-flyout', Flyout);

declare global {
  interface HTMLElementTagNameMap {
    'tds-flyout': Flyout;
  }
}
