import { LitElement, PropertyValueMap, css, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { ref, createRef, Ref } from "lit/directives/ref.js";
import { styleMap } from "lit/directives/style-map.js";

@customElement("image-sequence")
export class ImageSequence extends LitElement {
  static styles = css`
    .wrapper {
      width: 100%;
      position: relative;
    }

    .wrapper canvas {
      width: 100%;
      height: 100vh;
      inset: 0;
      position: sticky;
      object-fit: contain;
      pointer-events: none;
    }
  `;

  @property()
  images: string[] = [];
  @property({ type: Number })
  duration?: number = 100;
  @property({ type: Number })
  threshold?: number = 0;

  @state()
  protected scrollY = 0;
  @state()
  protected imageSources: HTMLImageElement[] = [];

  sectionRef: Ref<HTMLInputElement> = createRef();
  canvasRef: Ref<HTMLCanvasElement> = createRef();

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener("scroll", this._handleScroll);
  }

  protected firstUpdated(
    _changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>
  ): void {
    super.firstUpdated(_changedProperties);
    Promise.all(this._loadImages()).then((sources) => {
      this.imageSources = sources;
      this._sizeCanvas();
      this._drawImage(0);
    });
  }

  protected updated(
    _changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>
  ): void {
    if (_changedProperties.has("scrollY")) {
      this._renderImageFrameEffect();
    }
  }

  disconnectedCallback(): void {
    window.removeEventListener("scroll", this._handleScroll);
    super.disconnectedCallback();
  }

  render() {
    return html`
      <section
        ${ref(this.sectionRef)}
        class="wrapper"
        style=${styleMap({ height: `${this.duration}vh` })}
      >
        <canvas ${ref(this.canvasRef)} />
      </section>
    `;
  }

  /**
   * This needs to be an arrow function.
   *
   * https://lit.dev/docs/components/events/#understanding-this-in-event-listeners
   */
  private _handleScroll = () => {
    this.scrollY = window.scrollY;
  };

  private _loadImages = () => {
    return this.images.map(
      (src) =>
        new Promise<HTMLImageElement>((resolve) => {
          const img = new Image();
          img.onload = () => resolve(img);
          img.src = src;
        })
    );
  };

  private _sizeCanvas = () => {
    const canvas = this.canvasRef.value;

    if (!canvas) return;

    const context = canvas.getContext("2d");

    canvas.width = window.outerWidth;
    canvas.height = window.outerHeight;

    context?.clearRect(0, 0, canvas.width, canvas.height);
  };

  private _drawImage = (frame: number) => {
    const canvas = this.canvasRef.value;

    if (!canvas || this.imageSources.length === 0) return;

    const context = canvas.getContext("2d");
    // get image element by frame
    const image = this.imageSources[frame];
    // calculate image size according to canvas size
    const hRatio = canvas.width / image.width;
    const vRatio = canvas.height / image.height;
    const ratio = Math.min(hRatio, vRatio);
    const centerShiftX = (canvas.width - image.width * ratio) / 2;
    const centerShiftY = (canvas.height - image.height * ratio) / 2;

    requestAnimationFrame(() => {
      context?.drawImage(
        image,
        0,
        0,
        image.width,
        image.height,
        centerShiftX,
        centerShiftY,
        image.width * ratio,
        image.height * ratio
      );
    });
  };

  private _renderImageFrameEffect = () => {
    const section = this.sectionRef.value;
    const canvas = this.canvasRef.value;

    if (!section || !canvas) return;

    let withinTop = this.scrollY >= section?.offsetTop - this.threshold!;
    let withinBottom =
      this.scrollY <= section?.offsetTop + section?.offsetHeight;
    let intersecting = withinTop && withinBottom;
    let imageCount = this.imageSources.length;

    if (intersecting) {
      const scrollTop = this.scrollY - (section.offsetTop - this.threshold!);
      const contentHeight = canvas.clientHeight;
      const progress = scrollTop / contentHeight;
      const frame = Math.max(
        0,
        Math.min(imageCount - 1, Math.floor(progress * imageCount))
      );

      this._drawImage(frame);
    }
  };
}
