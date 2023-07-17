class DynamicTitle extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });

    // component base
    const componentRoot = document.createElement('h1');
    componentRoot.textContent = this.getAttribute('title');

    // component styles
    const style = document.createElement('style');
    style.textContent = `
      h1 {
        font-size: 2rem;
        color: red;
      }`;

    // send component to shadow
    shadow.appendChild(componentRoot);
    shadow.appendChild(style);
  }
}

customElements.define('dynamic-title', DynamicTitle);
