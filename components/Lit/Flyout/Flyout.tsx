import { LitElement, html, css, unsafeCSS, PropertyValues } from 'lit';
import { property } from 'lit/decorators.js';
import customStyles from './Flyout.scss?inline';

/**
 * A Flyout component that renders an offcanvas-style element with configurable
 * title, backdrop, size, and placement options.
 *
 * @element tds-flyout
 */
export class Flyout extends LitElement {
  /**
   * Title for the Flyout component.
   * @type {string}
   * @default 'Offcanvas'
   */
  @property({ type: String }) title = 'Offcanvas';

  /**
   * Determines if the Flyout backdrop is enabled or set to static.
   * @type {boolean | 'static'}
   * @default false
   */
  @property({ type: Boolean }) backdrop: boolean | 'static' = false;

  /**
   * Controls the visibility of the Flyout component.
   * @type {boolean}
   * @default false
   */
  @property({ type: Boolean, reflect: true }) show: boolean = false;

  /**
   * Specifies the size of the Flyout component.
   * @type {'sm' | 'md' | 'lg' | 'xl'}
   * @default 'sm'
   */
  @property({ type: String }) size: 'sm' | 'md' | 'lg' | 'xl' = 'sm';

  /**
   * Defines the placement of the Flyout on the screen.
   * @type {'start' | 'end' | 'top' | 'bottom'}
   * @default 'start'
   */
  @property({ type: String }) placement: 'start' | 'end' | 'top' | 'bottom' =
    'start';

  /**
   * Provides the styles for the Flyout component, including custom styles.
   * @returns {CSSResultGroup} The component's CSS styles.
   */
  static get styles() {
    return css`
      ${unsafeCSS(customStyles)}
    `;
  }

  constructor() {
    super();
  }

  /**
   * Lifecycle method called when the component updates.
   * Checks if the 'show' property has changed and updates the backdrop class accordingly.
   *
   * @param {PropertyValues} changedProperties - Map of changed properties with their previous values.
   */
  updated(changedProperties: PropertyValues) {
    super.updated(changedProperties);
    if (changedProperties.has('show')) {
      this._updateBackdropClass();
    }
  }

  /**
   * Updates the backdrop class based on the `show` and `backdrop` properties.
   * Adds the 'offcanvas-backdrop' class if `show` is true or `backdrop` is 'static',
   * otherwise removes the class.
   *
   * @private
   */
  _updateBackdropClass() {
    if (this.show === true || this.backdrop === 'static') {
      this.classList.add('offcanvas-backdrop');
    } else {
      this.classList.remove('offcanvas-backdrop');
    }
  }

  /**
   * Renders the Flyout component with specified size, placement, and visibility.
   * @returns {TemplateResult} The template for the Flyout component.
   */
  render() {
    return html`
      <div
        class="offcanvas offcanvas-${this.size} offcanvas-${this
          .placement} ${this.show ? 'show' : ''}"
        tabindex="-1"
        id="offcanvas"
        aria-labelledby="offcanvasLabel"
      >
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
