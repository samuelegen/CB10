import { Get } from "./GET.js";
import { createElement } from "./createElement.js";
const popularObj = await Get("movie/popular", 1)
const searchBarEl = document.querySelector(".searchBar");

searchBarEl.addEventListener("input", (event) => {
	const inputValue = event.target.value.toLowerCase();
	filterProducts(inputValue, popularObj.results);
});

function filterProducts(inputValue, items) {
	const filteredProducts = items.filter((item) =>
		item.title.toLowerCase().includes(inputValue)
	);
	createElement(filteredProducts);
}
