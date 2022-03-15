class Beld extends HTMLElement{
    constructor(){
        super();
        this.beld = document.createElement('img');
    }

    connectedCallback() {
        this.beld.src = "https://i.imgur.com/lz89EZa.png"
        this.beld.id = "image"
        this.id = "beld"
        this.render();
      }

    render() {
        this.appendChild(this.beld);
    }
}


customElements.define("my-beld", Beld);