class Cardnews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build() {
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card__left");

        const autor = document.createElement("span");
        autor.textContent = 'By ' + (this.getAttribute('autor') || "Anonymous");

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute('title');
        linkTitle.href = this.getAttribute('link-url');

        const newsContent = document.createElement("p");
        newsContent = this.getAttribute('content');

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card__right");

        const newsImage = createElement("img");
        newsImage.src = (this.getAttribute('photo') || './img/photo.webp');
        newsImage.alt = 'Foto da notícia';
        cardRight.appendChild(newsImage);

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    styles() {
        const style = document.createElement('style');
        style.textContent = `
            .card{
                width: 720px;
                margin: 10px auto;
                display: flex;
                justify-content: space-between;
                box-shadow: 1px 1px 10px #00000066, -1px -1px 10px #00000066;
            }
            .card__left{
                width: 60%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding: 20px 0 0 20px;
            }
            .card__left span{
                font-weight: bolder;
            }
            .card__left a{
                font-size: 30px;
                margin: 15px 0 5px;
                color: #333;
            }
            .card__left p{
                color: #666;
            }
            .card__right{
                width: 40%;
            }
            .card__right img{
                width: 100%;
            }
        `

        return style;
    }
}

customElements.define("card-news", Cardnews);