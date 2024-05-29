import { LitElement, html, css, unsafeCSS, PropertyValues } from 'lit';
import { property } from 'lit/decorators.js';
import customStyles from './Flyout.scss?inline';

export class Flyout extends LitElement {
  @property({ type: String }) title = 'Offcanvas';
  @property({ type: Boolean }) backdrop: boolean | 'static' = false;
  @property({ type: Boolean, reflect: true }) show: boolean = false;
  @property({ type: String }) size: 'sm' | 'md' | 'lg' | 'xl' = 'sm';
  @property({ type: String }) placement: 'start' | 'end' | 'top' | 'bottom' = 'start';

  static get styles() {
    return css`
      ${unsafeCSS(customStyles)}
    `;
  }

  constructor() {
    super();
  }

  updated(changedProperties: PropertyValues) {
    super.updated(changedProperties);
    if (changedProperties.has('show')) {
      this._updateBackdropClass();
    }
  }

  _updateBackdropClass() {
    if (this.show === true || this.backdrop === 'static') {
      this.classList.add('offcanvas-backdrop');
    } else {
      this.classList.remove('offcanvas-backdrop');
    }
  }

  render() {
    return html`
      <div class="offcanvas offcanvas-${this.size} offcanvas-${this.placement} ${this.show ? 'show' : ''}" tabindex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
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
