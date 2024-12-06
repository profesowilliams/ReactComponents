import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

export class MenuItem extends LitElement {
  @property({ type: Boolean }) disabled: boolean = false;
  @property({ type: String }) href: string | undefined = undefined;

  static styles = css`
    :host {
      display: block;
    }
    a {
      display: block;
      padding: 0.62rem 1rem;
      text-decoration: none;
      color: inherit;
      cursor: pointer;
      border-radius: 4px;
    }
    a:focus {
      outline: 2px solid #0078d4;
      outline-offset: 2px;
    }
    a:hover:not([aria-disabled='true']) {
      background-color: #eee;
    }
    a[aria-disabled='true'] {
      color: gray;
      cursor: not-allowed;
    }
  `;

  render() {
    return html`
      <a
        role="menuitem"
        href=${this.disabled || !this.href ? 'javascript:void(0)' : this.href}
        aria-disabled=${this.disabled}
        tabindex=${this.disabled ? '-1' : '0'}
      >
        <slot></slot>
      </a>
    `;
  }
}

customElements.define('tds-menu-item', MenuItem);
export default MenuItem;
