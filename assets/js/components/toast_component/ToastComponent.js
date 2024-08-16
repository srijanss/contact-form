import css from "./ToastComponent.css?inline";

export default class ToastComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.shadow = this.attachShadow({ mode: "open" });
  }

  render() {
    this.shadow.innerHTML = `
      <style>
        ${css}
      </style>
      <article class="toast" aria-live="assertive" role="alert" aria-atomic="true">
        <h2>Message Sent!</h2>
        <p>Thanks for completing the form. We'll be in touch soon!</p>
      </article>
    `;
    this.removeToastMessage();
    return new Promise((resolve) => {
      resolve();
    });
  }

  removeToastMessage() {
    setTimeout(() => {
      this.shadow.innerHTML = "";
    }, 5000);
  }
}
