import { html, css, LitElement } from 'lit';

export class DvejTemplate extends LitElement {
  static styles = css`
    :host {
      display: block;
      color: var(--dvej-template-text-color, #000);
    }
    .header {
      background-color: white;
      padding: 10px;
    }
    .main {
      background-color: white;
      padding: 20px;
    }
    .footer {
      padding: 10px;
      position: fixed;
      height: 50px;
      background-color: red;
      bottom: 0px;
      left: 0px;
      right: 0px;
      margin-bottom: 0px;
    }
    .over {
      position: absolute;
      top: 0px;
      left: 0px;
      height: 100vh;
      width: 100vw;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `;

  static properties = {
    variant: { type: String },
  };

  render() {
    let template = html``;

    switch (this.variant) {
      case 'complete':
        template = html`
          <div class="notification">
            <slot name="notification"></slot>
          </div>
          <div class="header">
            <slot name="header"></slot>
          </div>
          <div class="main">
            <slot name="main"></slot>
          </div>
          <div class="footer">
            <slot name="footer"></slot>
          </div>
          <div class="over">
            <slot name="over"></slot>
          </div>
        `;
        break;
      case 'without-footer':
        template = html`
          <div class="notification">
            <slot name="notification"></slot>
          </div>
          <div class="header">
            <slot name="header"></slot>
          </div>
          <div class="main">
            <slot name="main"></slot>
          </div>
        `;
        break;
      default:
        break;
    }
    return template;
  }
}
