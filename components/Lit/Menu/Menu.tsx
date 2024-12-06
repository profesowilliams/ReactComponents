import { LitElement, html, css, unsafeCSS } from 'lit';
import { property, query } from 'lit/decorators.js';
import {
  computePosition,
  offset,
  flip,
  shift,
  autoPlacement,
} from '@floating-ui/dom';
import customStyles from './Menu.scss?inline';

export class Menu extends LitElement {
  @property({ type: Boolean }) open: boolean = false;
  @property({ type: String }) placement: 'top' | 'bottom' | 'left' | 'right' =
    'bottom';

  @query('#menu-content') private menuInstance!: HTMLElement;
  @query('#menu-trigger') private triggerElement!: HTMLElement;

  static styles = css`
    ${unsafeCSS(customStyles)}
  `;

  updated(changedProperties: Map<string | number | symbol, unknown>) {
    if (changedProperties.has('open') && this.open) {
      this.positionMenu();
    }
  }

  async positionMenu() {
    if (this.triggerElement && this.menuInstance) {
      await computePosition(this.triggerElement, this.menuInstance, {
        placement: this.placement,
        middleware: [
          offset(8), // 8px offset
          flip(),
          shift(),
          autoPlacement(),
        ],
      }).then(({ x, y }) => {
        Object.assign(this.menuInstance.style, {
          left: `${x}px`,
          top: `${y}px`,
        });
      });
    }
  }

  toggleMenu() {
    this.open = !this.open;
  }

  render() {
    return html`
      <div id="menu-trigger" @click=${this.toggleMenu}>
        <slot name="trigger"></slot>
      </div>
      <div
        id="menu-content"
        class="menu ${this.open ? 'open' : ''}"
        role="menu"
        aria-hidden="${!this.open}"
      >
        <slot></slot>
      </div>
    `;
  }
}

customElements.define('tds-menu', Menu);
export default Menu;
