class CardNews extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(this.build());
    shadowRoot.appendChild(this.styles());
  }

  build() {
    const componentRoot = document.createElement('div');
    componentRoot.setAttribute('class', 'card');

    // CARD LEFT
    const cardLeft = document.createElement('div');
    componentRoot.appendChild(cardLeft);
    cardLeft.setAttribute('class', 'card__left');

    const author = document.createElement('span');
    cardLeft.appendChild(author);
    author.textContent = `By ${this.getAttribute('author') || 'Anonymous'}`;

    const linkTitle = document.createElement('a');
    cardLeft.appendChild(linkTitle);
    linkTitle.textContent = this.getAttribute('title');
    linkTitle.href = this.getAttribute('linkSrc') || 'https://www.bing.com/';
    linkTitle.target = '_blank';
    linkTitle.rel = 'noopener noreferrer';

    const newsContent = document.createElement('p');
    cardLeft.appendChild(newsContent);
    newsContent.textContent = this.getAttribute('content');

    // CARD RIGHT
    const cardRight = document.createElement('div');
    componentRoot.appendChild(cardRight);
    cardRight.setAttribute('class', 'card__right');

    const newsImage = document.createElement('img');
    cardRight.appendChild(newsImage);
    newsImage.src = this.getAttribute('imgSrc') || 'assets/default.jpg';
    newsImage.alt = this.getAttribute('imgAlt') || 'News Image';

    return componentRoot;
  }

  styles() {
    const style = document.createElement('style');

    style.textContent = `
    .card {
      max-width: 100%;
      box-shadow: 9px 9px 24px 0px rgba(0, 0, 0, 0.1);
      -webkit-box-shadow: 9px 9px 24px 0px rgba(0, 0, 0, 0.1);
      -moz-box-shadow: 9px 9px 24px 0px rgba(0, 0, 0, 0.1);
      -ms-box-shadow: 9px 9px 24px 0px rgba(0, 0, 0, 0.1);
      -o-box-shadow: 9px 9px 24px 0px rgba(0, 0, 0, 0.1);
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-content: space-between;
      align-items: center;
    }

    .card__left {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 10px;
    }
    
    .card__left > span {
      font-weight: 300;
    }
    
    .card__left > a {
      margin-top: 10px;
      font-size: 32px;
      font-weight: 700;
      text-decoration: none;
      color: inherit;
    }   
    
    .card__left > p {
      color: rgba(70, 70, 70, 1);
    }

    img {
      object-fit: cover;
      max-width: 350px;
    }
    `;

    return style;
  }
}

customElements.define('card-news', CardNews);
