class resultModal extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    set recipe(recipe) {
        this._recipe = recipe;
        this.render()
    }

    render() {
        this.setAttribute("id", `modal-${this._recipe.idMeal}`)
        this.setAttribute("class", "fixed inset-0 z-50 flex bg-gray-900 bg-opacity-30 hidden duration-500")
        this.innerHTML = `
             <div
                class="w-full h-full px-5 overflow-y-scroll bg-white border rounded-lg shadow-xl md:mx-auto lg:px-10 text-blueGray-500">
                 <div class="flex items-center justify-between px-6 py-4 ">
                    <span class="">Detail</span>
                    <button id="close-${this._recipe.idMeal}" class="px-2 py-1 transition rounded-lg hover:bg-gray-200" type="button">
                        <i class="text-xl bi bi-x-circle"></i>
                    </button>
                </div>
                <div class="lg:max-w-2xl flex flex-col items-center w-full mx-auto mb-12 text-center">
                    <img src="${this._recipe.strMealThumb}" alt="preview"
                        class="object-contain object-center rounded-lg w-full sm:max-w-[350px]">
                    <h1
                        class="mx-auto mt-5 mb-8 text-2xl font-semibold leading-none tracking-tighter text-black lg:w-1/2 sm:text-4xl title-font">
                        ${this._recipe.strMeal}
                    </h1>
                    <p>
                        ${this._recipe.strInstructions}
                    </p>
                </div>
            </div>
        `
        this.querySelector(`#close-${this._recipe.idMeal}`).addEventListener("click", () => {
            this.classList.toggle("hidden");
        })
    }
}

customElements.define("result-modal", resultModal);