import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("ds-input")
export class Input extends LitElement {
  static styles = css`
    .outer-wrapper {
      display: inline-block;
      text-align: left;
      z-index: 0;
      padding-top: var(--padding-top, 1.6rem);
    }

    .inner-wrapper {
      width: 100%;
      display: flex;
      border-bottom: 1px solid var(--brand, var(--border-color, black));
    }

    .relative-wrapper {
      width: 100%;
      position: relative;
    }

    .input {
      width: 100%;
      display: flex;
      border: none;
      padding-bottom: 0.5rem;
      background-color: var(--input-bg, transparent);
      appearance: none;
    }

    .input:focus {
      outline-width: 0px;
    }

    .label {
      top: -0.5rem;
      left: 0px;
      position: absolute;
      transform: translate(0, -1.5rem) scaleY(0.9);
      transition-duration: 300ms;
      transform-origin: 0;
      z-index: -10;
      color: var(--brand, var(--label-color, black));
    }

    .input:placeholder-shown ~ .label {
      transform: translate(0, 0px) scaleY(1);
    }

    .input:focus ~ .label {
      transform: translate(0, -1.5rem) scaleY(0.9);
    }
  `;

  @property()
  id: string = "";
  @property()
  label: string = "";
  @property()
  placeholder: string = this.label;
  @property()
  type: HTMLInputElement["type"] = "text";

  render() {
    return html`
      <div class="outer-wrapper">
        <div class="inner-wrapper">
          <div class="relative-wrapper">
            <input
              id=${this.id}
              type=${this.type}
              class="input"
              placeholder=${this.placeholder}
            />
            <label htmlFor=${this.id} class="label">${this.label}</label>
          </div>
        </div>
      </div>
    `;
  }
}
