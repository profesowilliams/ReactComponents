import { LitElement, html, css, unsafeCSS } from 'lit';
import { property } from 'lit/decorators.js';
import {
  computePosition,
  offset,
  arrow,
  shift,
  limitShift,
  flip,
  autoPlacement,
  size,
  hide,
  inline,
  Placement,
  Strategy,
} from '@floating-ui/dom';
import customStyles from './Tooltip.scss?inline';

/**
 * Tooltip component using Bootstrap styles and Floating UI for positioning.
 *
 * @prop {string} text - The tooltip text
 * @prop {Placement} placement - The tooltip placement (e.g., 'top', 'top-start', 'right-end', etc.)
 * @prop {Strategy} strategy - The positioning strategy, either 'absolute' or 'fixed'
 * @prop {number | object | function} offset - Offset options for distance, axes, or custom function
 * @prop {boolean} shift - Enables shifting to prevent overflow
 * @prop {boolean} shiftMainAxis - Controls shifting along the main axis (default: true)
 * @prop {boolean} shiftCrossAxis - Controls shifting along the cross axis (default: false)
 * @prop {number | function | object} shiftLimiterOffset - Offset for the shift limiter (can be a number, function, or object)
 * @prop {boolean} flip - Enables flipping to keep the tooltip in view
 * @prop {boolean} flipMainAxis - Checks overflow on the main axis to perform a flip
 * @prop {boolean} flipCrossAxis - Checks overflow on the cross axis to perform a flip
 * @prop {'none' | 'start' | 'end'} flipFallbackAxisSideDirection - Fallback direction along the opposite axis if no placements fit
 * @prop {boolean} flipAlignment - Controls flipping for aligned placements (e.g., 'top-start' to 'top-end')
 * @prop {Array<Placement>} flipFallbackPlacements - An explicit list of fallback placements to try
 * @prop {'bestFit' | 'initialPlacement'} flipFallbackStrategy - Strategy to use when no placements fit
 * @prop {boolean} arrow - Enables arrow positioning to point to the reference element
 * @prop {number} arrowPadding - Padding between the arrow and edges of the floating element
 *
 * @summary A custom tooltip component with Floating UI positioning and middleware options
 * @tag tds-tooltip
 */

export class Tooltip extends LitElement {
  @property({ type: String }) text = '';
  @property({ type: String }) placement: Placement = 'bottom';
  @property({ type: String }) strategy: Strategy = 'absolute';

  // Offset middleware properties
  @property({ type: Number }) offset:
    | number
    | { mainAxis?: number; crossAxis?: number; alignmentAxis?: number | null }
    | ((args: { rects: any }) => any) = 10;

  // Shift middleware properties
  @property({ type: Boolean }) shift = true;
  @property({ type: Boolean }) shiftMainAxis = true;
  @property({ type: Boolean }) shiftCrossAxis = false;
  @property({ type: Number }) shiftLimiterOffset:
    | number
    | { mainAxis?: number; crossAxis?: number }
    | ((args: { rects: any; placement: Placement }) => any) = 0;

  // Flip middleware properties
  @property({ type: Boolean }) flip = true;
  @property({ type: Boolean }) flipMainAxis = true;
  @property({ type: Boolean }) flipCrossAxis = true;
  @property({ type: String }) flipFallbackAxisSideDirection:
    | 'none'
    | 'start'
    | 'end' = 'none';
  @property({ type: Boolean }) flipAlignment = true;
  @property({ type: Array }) flipFallbackPlacements: Array<Placement> = [];
  @property({ type: String }) flipFallbackStrategy:
    | 'bestFit'
    | 'initialPlacement' = 'bestFit';

  @property({ type: Boolean }) autoPlacement = false;
  @property({ type: Boolean }) size = false;
  @property({ type: Boolean }) inline = false;

  // Arrow middleware properties
  @property({ type: Boolean }) arrow = true;
  @property({ type: Number }) arrowPadding = 0;

  @property({ type: Boolean }) hide = true;

  private tooltipInstance: HTMLElement | null = null;
  private targetElement: HTMLElement | null = null;
  private arrowElement: HTMLElement | null = null;

  static get styles() {
    return css`
      ${unsafeCSS(customStyles)}
    `;
  }

  /**
   * Initializes the Floating UI tooltip on the first child element.
   */
  firstUpdated() {
    this.targetElement = this.firstElementChild as HTMLElement;
    this.tooltipInstance = this.shadowRoot?.getElementById(
      'tooltip-content'
    ) as HTMLElement;
    this.arrowElement = this.shadowRoot?.getElementById(
      'tooltip-arrow'
    ) as HTMLElement;

    if (this.targetElement) {
      this.targetElement.addEventListener('mouseenter', () =>
        this.showTooltip()
      );
      this.targetElement.addEventListener('mouseleave', () =>
        this.hideTooltip()
      );
      this.targetElement.addEventListener('focus', () => this.showTooltip());
      this.targetElement.addEventListener('blur', () => this.hideTooltip());
    }
  }

  /**
   * Builds the middleware array based on component properties.
   */
  private buildMiddleware() {
    const middleware = [];

    // Offset middleware
    if (this.offset !== undefined) {
      middleware.push(
        typeof this.offset === 'function'
          ? offset(this.offset)
          : offset(this.offset)
      );
    }

    // Shift middleware with custom limiter options
    if (this.shift) {
      middleware.push(
        shift({
          mainAxis: this.shiftMainAxis,
          crossAxis: this.shiftCrossAxis,
          limiter: limitShift({
            offset: this.shiftLimiterOffset,
          }),
        })
      );
    }

    // Flip middleware with advanced configuration
    if (this.flip) {
      middleware.push(
        flip({
          mainAxis: this.flipMainAxis,
          crossAxis: this.flipCrossAxis,
          fallbackAxisSideDirection: this.flipFallbackAxisSideDirection,
          flipAlignment: this.flipAlignment,
          fallbackPlacements:
            this.flipFallbackPlacements.length > 0
              ? this.flipFallbackPlacements
              : undefined,
          fallbackStrategy: this.flipFallbackStrategy,
        })
      );
    }

    if (this.inline) middleware.push(inline());
    if (this.autoPlacement) middleware.push(autoPlacement());

    // Size middleware for limiting dimensions based on available space
    if (this.size) {
      middleware.push(
        size({
          apply: ({ availableWidth, availableHeight, elements }) => {
            Object.assign(elements.floating.style, {
              maxWidth: `${Math.max(0, availableWidth)}px`,
              maxHeight: `${Math.max(0, availableHeight)}px`,
            });
          },
        })
      );
    }

    // Arrow middleware for pointing the arrow element
    if (this.arrow) {
      middleware.push(
        arrow({ element: this.arrowElement!, padding: this.arrowPadding })
      );
    }

    if (this.hide) middleware.push(hide());

    return middleware;
  }

  /**
   * Displays the tooltip and uses Floating UI to position it.
   */
  async showTooltip() {
    this.tooltipInstance!.classList.add('show');
    if (this.arrow && this.arrowElement) {
      this.arrowElement.style.display = 'block';
    }
    await computePosition(this.targetElement!, this.tooltipInstance!, {
      placement: this.placement,
      strategy: this.strategy,
      middleware: this.buildMiddleware(),
    }).then(({ x, y, placement, middlewareData }) => {
      Object.assign(this.tooltipInstance!.style, {
        top: `${y}px`,
        left: `${x}px`,
      });

      if (this.arrow && middlewareData.arrow) {
        const { x: arrowX, y: arrowY } = middlewareData.arrow;
        const staticSide = {
          top: 'bottom',
          right: 'left',
          bottom: 'top',
          left: 'right',
        }[placement.split('-')[0]];

        Object.assign(this.arrowElement!.style, {
          left: arrowX != null ? `${arrowX}px` : '',
          top: arrowY != null ? `${arrowY}px` : '',
          right: '',
          bottom: '',
          [staticSide]: '-4px', // Adjust this value as needed for your design
        });
      }
    });
  }

  /**
   * Hides the tooltip.
   */
  hideTooltip() {
    this.tooltipInstance!.classList.remove('show');
    if (this.arrowElement) {
      this.arrowElement.style.display = 'none';
    }
  }

  render() {
    return html`
      <slot></slot>
      <div id="tooltip-content" class="tooltip" role="tooltip">
        <div id="tooltip-arrow" class="tooltip-arrow" data-popper-arrow></div>
        <div class="tooltip-inner">${this.text}</div>
      </div>
    `;
  }
}

customElements.define('tds-tooltip', Tooltip);
export default Tooltip;
