class inputSearch extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render()
    }

    get value() {
        return this.querySelector("#pencarian").value;
    }

    render() {
        const rekomendasi = ["Rendang", "Steak", "Salad", "Lasagna"];
        
        this.innerHTML = `
        <div class="relative z-20 w-5/6 py-6 mx-auto -mt-16 bg-white rounded-lg shadow-lg md:mx-0 md:ml-20 lg:w-2/3">
            <div class="flex flex-row items-center gap-2 pl-3 ml-6 mr-4 bg-gray-100 rounded-tr-lg rounded-br-lg sm:pl-6">
                <i class="text-base text-gray-400 sm:text-lg bi bi-search"></i>
                <input id="pencarian" class="flex-grow w-full px-4 py-3 text-xs text-black bg-transparent rounded-lg sm:text-base lg:w-auto focus:outline-none"
                    placeholder="Ingin masak apa hari ini?" type="text">
                <button id="pencarian-button" class="btn-search">
                    Pencarian
                </button>
            </div>
            <div id="rekomendasi" class="hidden pl-6 mt-5 ml-6 mr-4 text-gray-600 sm:flex">
                <span class="mr-2">Rekomendasi : </span>
                ${rekomendasi.map((item, index) => {
                    return `<span class="rekomendasi-item${index} underline text-primary cursor-pointer ml-2">${item}</span>`
                }).join(" ")}
            </div>
        </div>
        `;

        this.querySelector("#pencarian-button").addEventListener("click", this._clickEvent);

        for (const index of rekomendasi.entries()) {
            this.querySelector(`.rekomendasi-item${index}`).addEventListener("click", () => {
                this.querySelector("#pencarian").value = this.querySelector(`.rekomendasi-item${index}`).innerText;
            });
        }

    }

}

customElements.define("input-search", inputSearch);