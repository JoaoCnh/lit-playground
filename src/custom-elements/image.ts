import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { repeat } from "lit/directives/repeat.js";

@customElement("editorial-image")
export class EditorialImage extends LitElement {
  // Define scoped styles right with your component, in plain CSS
  static styles = css`
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `;

  // Declare reactive properties
  @property({ type: Object })
  src: ImageToolsSrc = {
    img: { src: "", w: 0, h: 0 },
    sources: {},
  };
  @property()
  sizes?: string = "";
  @property()
  alt?: string = "";

  sourcesTemplate() {
    return repeat(
      Object.entries(this.src.sources),
      ([ext]) => ext,
      ([, srcSet]) => html` <source srcset=${srcSet} sizes=${this.sizes} /> `
    );
  }

  // Render the UI as a function of component state
  render() {
    return html`
      <picture>
        ${this.sourcesTemplate()}
        <img
          src="${this.src.img.src}"
          alt="${this.alt}
          width="${this.src.img.w}"
          height="${this.src.img.h}"
        />
      </picture>
    `;
  }
}

export type ImageToolsSrc = {
  img: { src: string; w: number; h: number };
  sources: Record<string, string>;
};
