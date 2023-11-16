import { LitElement, css, html, unsafeCSS } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { styleMap } from "lit/directives/style-map.js";
import theme from "$/theme";

function easeInOutCubic(x: number): number {
  return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
}

@customElement("card-link")
export class CardLink extends LitElement {
  // Define scoped styles right with your component, in plain CSS
  static styles = css`
    :host {
      --bg-color: ${unsafeCSS(theme.colors.white)};
      --bg-hover-color: ${unsafeCSS(theme.colors.gray[100])};
      --border-color: ${unsafeCSS(theme.colors.gray[200])};
      --border-radius: ${unsafeCSS(theme.borderRadius.lg)};
      --shadow: ${unsafeCSS(theme.boxShadow.DEFAULT)};
      --mobile-padding: ${unsafeCSS(theme.spacing[2])};
      --font-weight: ${unsafeCSS(theme.fontWeight.bold)};
    }

    .wrapper {
      position: relative;
      display: block;
      with: 100%;
      height: 100%;
      background: var(--bg-color);
      border: 1px solid var(--border-color);
      border-radius: var(--border-radius);
      overflow: hidden;
      box-shadow: var(--shadow);
    }

    .wrapper:hover {
      background: var(--bg-hover-color);
    }

    .animated-info {
      inset: 0;
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: var(--border-radius);
      pointer-events: none;
      background-color: rgba(0, 0, 0, 0.4);
    }

    .animated-info h5 {
      color: white;
      text-transform: uppercase;
      font-weight: var(--font-weight);
      text-align: center;
      font-size: 1.5rem;
      line-height: 2rem;
      letter-spacing: -0.025em;
    }

    .mobile-info {
      inset: 0;
      position: absolute;
      display: flex;
      align-items: flex-end;
      padding: var(--mobile-padding);
      border-radius: var(--border-radius);
    }

    .mobile-info h5 {
      color: white;
      text-transform: uppercase;
      font-weight: var(--font-weight);
      text-align: left;
      font-size: 1.25rem;
      line-height: 1.75rem;
      letter-spacing: -0.025em;
    }

    @media (min-width: 768px) {
      .mobile-info {
        display: none;
      }
    }
  `;

  // Declare reactive properties
  @property()
  href: string = "";
  @property()
  title: string = "";

  @state()
  protected coordsX = -100;
  @state()
  protected coordsY = 0;

  disconnectedCallback(): void {
    cancelAnimationFrame(this._animationFrame);
    super.disconnectedCallback();
  }

  // Render the UI as a function of component state
  render() {
    const styles = {
      transform: `translate3d(${this.coordsX}%, ${this.coordsY}%, 1px)`,
    };

    return html`
      <a
        href=${this.href}
        class="wrapper"
        @mouseenter="${this._animateIn}"
        @mouseleave="${this._animateOut}"
      >
        <slot></slot>

        <div class="mobile-info">
          <h5>${this.title}</h5>
        </div>

        <div class="animated-info" style=${styleMap(styles)}>
          <h5>${this.title}</h5>
        </div>
      </a>
    `;
  }

  private _getAnimationDirection(event: MouseEvent) {
    const { clientX, clientY } = event;
    const target = event.target as HTMLAnchorElement;
    const { x, y, width, height } = target.getBoundingClientRect();

    let bounds = [
      // top
      { value: y - clientY, position: { x: 0, y: -100 } },
      // right
      { value: x + width - clientX, position: { x: 100, y: 0 } },
      // bottom
      { value: y + height - clientY, position: { x: 0, y: 100 } },
      // left
      { value: x - clientX, position: { x: -100, y: 0 } },
    ];

    const { position } = bounds.reduce((closestBound, bound) => {
      return Math.abs(bound.value) < Math.abs(closestBound.value)
        ? bound
        : closestBound;
    });

    return position;
  }

  _animationFrame: number = 0;
  _animationStartTime: number | null = null;
  _animationOptions = {
    duration: 300,
    easing: easeInOutCubic,
  };

  private _animateTo(position: { x: number; y: number }, duration?: number) {
    this._animationStartTime = null;
    cancelAnimationFrame(this._animationFrame);

    let initialPosition = { x: this.coordsX, y: this.coordsY };

    const loop = (timestamp: number) => {
      if (!this._animationStartTime) {
        this._animationStartTime = timestamp;
      }

      const runtime = timestamp - this._animationStartTime;
      const relativeProgress = runtime / this._animationOptions.duration;
      const easedProgress = this._animationOptions.easing(relativeProgress);

      if (position.x === 0) {
        this.coordsX = initialPosition.x * (1 - easedProgress);
      } else {
        this.coordsX = position.x * Math.min(easedProgress, 1);
      }

      if (position.y === 0) {
        this.coordsY = initialPosition.y * (1 - easedProgress);
      } else {
        this.coordsY = position.y * Math.min(easedProgress, 1);
      }

      if (runtime < this._animationOptions.duration) {
        this._animationFrame = requestAnimationFrame(loop);
      }
    };

    if (duration === 0) {
      this.coordsX = position.x;
      this.coordsY = position.y;
    } else {
      this._animationFrame = requestAnimationFrame(loop);
    }
  }

  private _animateIn(event: MouseEvent) {
    const position = this._getAnimationDirection(event);

    this._animateTo(position, 0);
    this._animateTo({ x: 0, y: 0 });
  }

  private _animateOut(event: MouseEvent) {
    const position = this._getAnimationDirection(event);
    this._animateTo(position);
  }
}
