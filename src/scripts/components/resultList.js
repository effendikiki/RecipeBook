import "./resultCard.js"

class resultList extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    set recipes(event) {
        this._recipes = event;
        this.render();
    }

    render() {
        this.innerHTML = "";
        this.setAttribute("class", this.getAttribute("class"));
        if (this._recipes) {
            this._recipes.forEach(recipe => {
                const card = document.createElement("result-card");
                card.recipe = recipe;
                this.appendChild(card);
            });
        }
        // this.innerHTML = "";
    }
}

customElements.define("result-list", resultList);