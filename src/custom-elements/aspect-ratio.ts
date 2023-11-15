import { LitElement, css, html } from "lit";
import { styleMap } from "lit/directives/style-map.js";
import { customElement, property } from "lit/decorators.js";

@customElement("aspect-ratio")
export class AspectRatio extends LitElement {
  // Define scoped styles right with your component, in plain CSS
  static styles = css`
    .wrapper {
      position: relative;
      width: 100%;
    }

    .absolute-wrapper {
      inset: 0;
      position: absolute;
    }
  `;

  // Declare reactive properties
  @property()
  ratio: number = 1;

  // Render the UI as a function of component state
  render() {
    const styles = { paddingBottom: `${100 / this.ratio}%` };

    return html`<div class="wrapper" style=${styleMap(styles)}>
      <div class="absolute-wrapper">
        <slot>
      </div>
    </div>`;
  }
}
