import { LitElement, html, css, unsafeCSS, PropertyValues } from 'lit';
import { property } from 'lit/decorators.js';
import customStyles from './Accordion.scss?inline';

// Utility function to generate a random unique ID
function generateUniqueId() {
  return 'accordion-' + Math.random().toString(36).substr(2, 9);
}

// Define the main accordion component
export class Accordion extends LitElement {
  static get styles() {
    return css`
      ${unsafeCSS(customStyles)}
    `;
  }

  @property({ type: String })
  outline: string = '';

  @property({ type: String })
  orientation: string = '';

  constructor() {
    super();
    this.id = generateUniqueId(); // Generate and set a unique ID
  }

  firstUpdated() {
    this._setItemAttributes();
  }

  updated(changedProperties: PropertyValues) {
    if (changedProperties.has('outline') || changedProperties.has('orientation')) {
      this._setItemAttributes();
    }
  }

  _setItemAttributes() {
    const items = this.querySelectorAll('tds-accordion-item');
    items.forEach((item, index) => {
      const sequence = String(index + 1).padStart(4, '0');
      item.setAttribute('accordion-id', `${this.id}-${sequence}`);
      item.setAttribute('data-bs-outline', this.outline);
      item.setAttribute('data-bs-orientation', this.orientation);
    });
  }

  render() {
    return html`
      <div class="accordion" id="${this.id}">
        <slot></slot>
      </div>
    `;
  }
}

customElements.define('tds-accordion', Accordion);
