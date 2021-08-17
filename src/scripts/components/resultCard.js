class resultCard extends HTMLElement {

    // set clickModal(event) {
    //     this._clickModal = event;
    // }

    connectedCallback() {
        this.render();
    }

    set recipe(event) {
        this._recipe = event;
        this.render();
    }

    render() {
        this.setAttribute("class", "w-full px-2 my-4 sm:w-1/2 lg:w-1/3 sm:min-w-[300px] max-w-[350px]");
        this.innerHTML = `
                <div class="overflow-hidden bg-white border rounded-lg hover:drop-shadow-md">
                    <div>
                        <img src="${this._recipe.strMealThumb}"
                            alt="preview" class="object-cover object-center w-full max-h-52">
                    </div>
                    <div class="flex flex-col p-6">
                        <h2 class="text-white badge bg-primary">
                            ${this._recipe.strCategory}
                        </h2>
                        <h4
                            class="mb-4 text-2xl font-semibold line-clamp-1 tracking-tighter text-black capitalize lg:text-3">
                            ${this._recipe.strMeal}
                        </h4>
                        <p class="mb-1 text-base leading-relaxed line-clamp-3">
                            Instruksi :
                        </p>
                        <p class="mb-3 text-base leading-relaxed line-clamp-3">
                            ${this._recipe.strInstructions}
                        </p>

                        <button class="btn hover:bg-primary text-primary-dark">
                            Lihat detail
                        </button>
                    </div>
                </div>
            `;

        // this.querySelector("#modal-button").addEventListener(
        //     "click",
        //     this._clickModal
        // );
    }
}

customElements.define("result-card", resultCard);
