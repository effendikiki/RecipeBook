import axios from "axios";
import "./components/inputSearch.js"
import "./components/resultList.js"


const main = () => {
    const search = document.querySelector("input-search");
    const resultList = document.querySelector("result-list");

    const onButtonSearchClicked = async () => {
        try {
            const results = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search.value}`);

            if (!results.data.meals) renderError(`Pencarian ${search.value} Tidak ditemukan`);

            document.querySelector("#statusPencarian")
                .innerText = `${results.data.meals.length} hasil pencarian untuk "${search.value}"`;
            renderResults(results.data.meals);
        } catch (error) {
            console.log(error);
        }
    }

    const renderError = message => {
        document.querySelector("result-list").innerHTML = "";
        document.querySelector("#statusPencarian").innerText = message;
        alert(message);
    }

    const renderResults = results => {
        resultList.recipes = results;
    }

    search.clickEvent = onButtonSearchClicked;
}

export default main;