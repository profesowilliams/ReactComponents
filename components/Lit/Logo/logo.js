import { LitElement, html, css } from "lit";

class Logo extends LitElement {
  static get properties() {
    return {
      path: { type: String },
    };
  }

  constructor() {
    super();
  }

  static get styles() {
    return css`
      :host {
        display: inline-block;
        vertical-align: middle;
        justify-content: center;
        color: var(--tds-icon-color, var(--white, #ffffff));
        pointer-events: none;
        padding: 0 5px;
      }
    `;
  }
  render() {
    return html``;
  }
}

customElements.define("tds-logo", Logo);
