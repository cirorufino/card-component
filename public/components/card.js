const template = document.createElement('template');
template.innerHTML = `


<link rel="stylesheet" href="/public/css/cards.css">

<div class="card">
    <div class="icon-green">
        <p>PRONTA CONSEGNA</p>
    </div>
    <div class="icon-red">
        <p>SUPER OFFERTA</p>
    </div>
    <div class="img">
        <img src=""> </img>
    </div>
    <div class=text>
        <h3 class="title"></h3>
        <p class="equip"></p>
        <p class="value">€</p>
        <h1 class="price"></h1>
        <p class="mese">mese</p>
    </div>
    <div class="button"> <button>SCOPRI I DETTAGLI</button> </div>
    
</div>
`;

class CardElement extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' }); //shadow dom
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector('img').src = this.getAttribute('photo');
        this.shadowRoot.querySelector('.title').innerHTML = this.getAttribute('title');
        this.shadowRoot.querySelector('.equip').innerHTML = this.getAttribute('equip');
        this.shadowRoot.querySelector('.price').innerHTML = this.getAttribute('price');
    }
}

customElements.define('card-element', CardElement);