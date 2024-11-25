import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import { PropertyValues } from 'lit';

export class Icon extends LitElement {
  @property({ type: String, reflect: true }) name = '';
  @property({ type: String, reflect: true }) state = 'default';
  @property({ type: String, reflect: true }) size = '24';
  @property({ type: String, reflect: true }) viewbox = '0 0 24 24';
  @property({ type: String, reflect: true }) flip = '';
  @property({ type: String, reflect: true }) rotate = '';
  @property({ type: String, reflect: true }) width = '';
  @property({ type: String, reflect: true }) height = '';
  @property({ type: String, reflect: true }) svgContent = '';

  static styles = css`
    :host {
      display: inline-block;
    }
    .icon-container {
      display: inline-block;
      width: var(--icon-width, 24px);
      height: var(--icon-height, 24px);
      transform: var(--icon-transform);
    }
    svg {
      width: 100%;
      height: 100%;
    }
  `;

  get iconPath() {
    const server = window.location.origin;
    return `${server}/content/dam/global-shared/icons/${this.state}/${this.name}.svg`;
  }

  get computedTransform() {
    const transforms = [];
    if (this.flip === 'horizontal') transforms.push('scaleX(-1)');
    if (this.flip === 'vertical') transforms.push('scaleY(-1)');
    if (this.rotate) transforms.push(`rotate(${this.rotate}deg)`);
    return transforms.join(' ');
  }

  async loadSVG() {
    try {
      const response = await fetch(this.iconPath);
      if (response.ok) {
        let svgText = await response.text();

        // Create a temporary container to manipulate the SVG
        const tempContainer = document.createElement('div');
        tempContainer.innerHTML = svgText;

        const svgElement = tempContainer.querySelector('svg');
        if (svgElement) {
          svgElement.setAttribute('width', this.width || this.size);
          svgElement.setAttribute('height', this.height || this.size);
          svgElement.setAttribute('viewBox', this.viewbox);
        }

        this.svgContent = tempContainer.innerHTML;
      } else {
        console.error('SVG not found:', this.iconPath);
        this.svgContent = '';
      }
      this.requestUpdate();
    } catch (error) {
      console.error('Error fetching SVG:', error);
      this.svgContent = '';
    }
  }

  updated(changedProperties: PropertyValues) {
    if (changedProperties.has('name') || changedProperties.has('state')) {
      this.loadSVG();
    }
  }

  render() {
    const width = this.width || this.size;
    const height = this.height || this.size;

    return html`
      <div
        class="icon-container"
        style="--icon-width: ${width}px; --icon-height: ${height}px; --icon-transform: ${this
          .computedTransform};     vertical-align: middle;"
      >
        ${unsafeSVG(this.svgContent)}
      </div>
    `;
  }
}

customElements.define('tds-icon', Icon);
