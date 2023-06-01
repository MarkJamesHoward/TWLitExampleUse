import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";
import { TWStyles } from "./Tailwind/twlit.js";

@customElement("my-element")
class MyElement extends LitElement {
  static styles = [css``, TWStyles];
  render() {
    return html`
      <div
        class="flex bg-red-100 sm:bg-red-500 sm:text-5xl flex-col justify-center text-2xl"
      >
        Test
      </div>
    `;
  }
}
