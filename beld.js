const url = "http://lemaypenguins.weebly.com/uploads/6/3/6/3/6363767/701862779.jpg";

class Beld extends HTMLElement{
    constructor(){
        super();
        this.beld = document.createElement('img');
    }

    connectedCallback() {
        this.beld.src = "https://i.imgur.com/lz89EZa.png"
        this.beld.id = "image"
        this.render();
      }

    render() {
        this.appendChild(this.beld);
    }
}


customElements.define("my-beld", Beld);