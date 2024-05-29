import { LitElement, html, css, unsafeCSS } from 'lit';
import { property } from 'lit/decorators.js';
import customStyles from './Toast.scss?inline';

// Define the type for the placement property
type ToastPlacement = 'top-left' | 'top-center' | 'top-right' | 'middle-left' | 'middle-center' | 'middle-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';

export class Toast extends LitElement {
  static get styles() {
    return css`
      ${unsafeCSS(customStyles)}
    `;
  }

  @property({ type: String }) id: string = '';
  @property({ type: String }) type: string = ''; // 'banner' or 'toast'
  @property({ type: String }) variant: string = ''; // 'success', 'error', 'warning', 'info'
  @property({ type: String }) size: string = ''; // 'small', 'medium', 'large'
  @property({ type: String }) link: string = ''; // link to open when action link is clicked
  @property({ type: String }) url: string = ''; // url to open when action link is clicked
  @property({ type: String }) target: string = '_self'; // target for the action link
  @property({ type: String }) message: string = ''; // message to display

  // Use the defined type for the placement property
  @property({ type: String }) placement: ToastPlacement = 'middle-center'; // default placement

  static position: Record<ToastPlacement, string> = {
    'top-left': 'top-0 start-0',
    'top-center': 'top-0 start-50 translate-middle-x',
    'top-right': 'top-0 end-0',
    'middle-left': 'top-50 start-0 translate-middle-y',
    'middle-center': 'top-50 start-50 translate-middle',
    'middle-right': 'top-50 end-0 translate-middle-y',
    'bottom-left': 'bottom-0 start-0',
    'bottom-center': 'bottom-0 start-50 translate-middle-x',
    'bottom-right': 'bottom-0 end-0',
  };

  static get placementOptions() {
    return Object.keys(this.position) as ToastPlacement[];
  }

  getPlacementClasses() {
    return Toast.position[this.placement] || 'top-50 start-50 translate-middle'; // Fallback to default
  }

  shouldUpdate(changedProperties: Map<string | number | symbol, unknown>) {
    return ['variant', 'placement', 'message', 'link', 'url', 'target'].some((prop) => changedProperties.has(prop));
  }

  render() {
    return html`
      <div class="toast-container ${this.getPlacementClasses()} p-3">
        <div class="fade toast show" role="alert" aria-live="assertive" aria-atomic="true" data-bs-state="${this.variant}">
          <slot>${this.message}</slot>
        </div>
      </div>
    `;
  }
}

export const placementOptions = Toast.placementOptions;
customElements.define('tds-toast', Toast);
