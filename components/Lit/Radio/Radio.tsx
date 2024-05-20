// src/components/Lit/Radio.tsx
import { LitElement, html, css, unsafeCSS, PropertyValues } from "lit";
import { property, customElement } from "lit/decorators.js";
import customStyles from "./Radio.scss?inline";

@customElement("tds-radio")
export class Radio extends LitElement {
  static get styles() {
    return css`
      ${unsafeCSS(customStyles)}
    `;
  }

  @property({ type: String }) path: string = "";
  @property({ type: Boolean, reflect: true }) checked: boolean = false;
  @property({ type: Boolean, reflect: true }) disabled: boolean = false;
  @property({ type: String, reflect: true }) id: string = "";
  @property({ type: String }) label: string = "";
  @property({ type: String, reflect: true }) name: string = "";

  constructor() {
    super();
    this.checked = false;
    this.disabled = false;
    this.id = "";
    this.label = "";
    this.name = "";
  }

  handleChange(event: Event) {
    if (!this.disabled) {
      const radioGroup = this.getRootNode().querySelectorAll<Radio>(
        `tds-radio[name="${this.name}"]`
      );
      radioGroup.forEach((radio) => {
        if (radio !== this) {
          radio.checked = false;
        }
      });
      this.checked = true;
      this.dispatchEvent(new Event("change"));
    }
  }

  render() {
    return html`
      <label class="form-control" for="${this.id}">
        <input
          type="radio"
          id="${this.id}"
          name="${this.name}"
          @change="${this.handleChange}"
          .checked="${this.checked}"
          ?disabled="${this.disabled}"
          aria-checked="${this.checked}"
          aria-disabled="${this.disabled}"
          data-theme="dark"
          class="form-check-input"
        />
        ${this.label ? html`<span>${this.label}</span>` : html`<slot></slot>`}
      </label>
    `;
  }
}

export default Radio;
