import { LitElement, html, css, property } from 'lit';
import { customElement } from 'lit/decorators.js';

// Class definition for the custom web component "tds-logo"
@customElement('tds-logo')
export class Logo extends LitElement {
  // Define properties for the component
  @property({ type: String }) path: string = ''; // path of the logo
  @property({ type: String }) size: string = '24'; // size of the logo
  @property({ type: String }) viewbox: string = '0 0 24 24'; // viewbox of the svg
  @property({ type: String }) flip: string = ''; // flip of the logo
  @property({ type: String }) rotate: string = ''; // rotation of the logo
  @property({ type: String }) src: string = ''; // source of the logo
  @property({ type: String }) width: string = ''; // width of the logo
  @property({ type: String }) height: string = ''; // height of the logo

  private logo: string = ''; // default logo

  constructor() {
    super();
    this.attachShadow({ mode: 'open' }); // attach shadow DOM
  }

  // method that runs when component is first connected to the DOM
  async connectedCallback() {
    super.connectedCallback();
    if (this.src) {
      const response = await fetch(this.src);
      const text = await response.text();
      this.logo = text; // fetch text from src and assign to logo
    }
  }

  // css styles for the component
  static styles = css`
    :host {
      display: inline-block;
      vertical-align: middle;
      justify-content: center;
      color: var(--tds-logo-color, #000);
      pointer-events: none;
      padding: 0 5px;
    }

    svg {
      display: inline-block;
      height: var(--logo-height, 24px);
      width: var(--logo-width, 24px);
    }
  `;

  // render method for the component
  render() {
    return html`${this.logo}`;
  }
}

// register the component with the name "tds-logo"
declare global {
  interface HTMLElementTagNameMap {
    'tds-logo': Logo;
  }
}
