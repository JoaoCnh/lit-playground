import { LitElement, css, html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { customElement, property } from "lit/decorators.js";

@customElement("ds-button")
export class Button extends LitElement {
  static styles = css`
    .button {
      display: inline-block;
      max-width: 100%;
      min-width: 24rem;
      text-align: center;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      height: var(--height, 4.4rem);
      padding: var(--padding-y, 1.2rem) var(--padding-x, 2.4rem);
      cursor: pointer;
    }

    .primary {
      background-color: var(--brand, var(--primary-bg, black));
      color: var(--primary-color, white);
      text-transform: uppercase;
    }

    .secondary {
      background-color: var(--secondary-bg, transparent);
      border: 1px solid var(--secondary-color, black);
      text-transform: uppercase;
    }
  `;

  @property()
  variant: "primary" | "secondary" = "primary";

  render() {
    return html`
      <button class=${classMap({ button: true, [this.variant]: this.variant })}>
        <slot />
      </button>
    `;
  }
}
