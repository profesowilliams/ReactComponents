import { LitElement, html, css, unsafeCSS, PropertyValues } from 'lit';
import { property } from 'lit/decorators.js';
import '../../Button';
import customStyles from './MenuButton.scss?inline';

export class MenuButton extends LitElement {
  static get styles() {
    return css`
      ${unsafeCSS(customStyles)}
    `;
  }

  @property({ type: Boolean }) primary = false;
  @property({ type: Boolean }) disabled = false;
  @property({ type: String }) type = 'button';
  @property({ type: String }) link = '';
  @property({ type: String }) variant = 'primary';
  @property({ type: String }) theme = 'dark';
  @property({ type: Boolean }) minimal = false;
  @property({ type: String }) id = '';
  @property({ type: String }) name = '';
  @property({ type: String }) className = '';
  @property({ type: String }) label = 'Button';
  @property({ type: String }) color = '';
  @property({ type: String }) size = 'medium';
  @property({ type: String }) backgroundColor = '';
  @property({ attribute: false }) onClick = () => {};

  render() {
    return html`<slot></slot>`;
  }

  firstUpdated(changedProperties: PropertyValues) {
    super.firstUpdated(changedProperties);
    this.addEventListener('click', this._handleClick.bind(this));
  }

  _handleClick(event: Event) {
    const toggle = this.getAttribute('data-bs-toggle');
    const dismiss = this.getAttribute('data-bs-dismiss');

    if (!toggle && !dismiss) {
      return;
    }

    if (toggle === 'menu' && this.hasAttribute('data-bs-target')) {
      const targetAttr = this.getAttribute('data-bs-target');
      if (targetAttr) {
        const targetId = targetAttr.substring(1);
        const menuElement = document.querySelector('tds-menu')?.shadowRoot?.getElementById(targetId);
        if (menuElement) {
          menuElement.classList.add('show');
        }
      }
    }

    if (dismiss === 'menu') {
      let menuElement: HTMLElement | null = this;
      while (menuElement && menuElement.tagName !== 'TDS-FLYOUT') {
        if (menuElement.parentElement) {
          menuElement = menuElement.parentElement;
        } else if (menuElement.getRootNode() instanceof ShadowRoot) {
          menuElement = (menuElement.getRootNode() as ShadowRoot).host as HTMLElement;
        } else {
          menuElement = null;
        }
      }

      if (menuElement) {
        const backdrop = document.querySelector('.offcanvas-backdrop');
        if (backdrop) {
          backdrop.classList.remove('show');
          backdrop.remove();
        }
      }
    }
  }
}

customElements.define('tds-menu-button', MenuButton);
