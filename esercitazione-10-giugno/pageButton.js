import { render } from "./index.js";

const containerBtn = document.querySelector(".page");
const Btn_back = document.createElement("button");
Btn_back.className = "buttonback";
Btn_back.textContent = "BACK";
const Btn_next = document.createElement("button");
Btn_next.className = "button_next";
Btn_next.textContent = "NEXT";
containerBtn.append(Btn_back, Btn_next);

const containerCat = document.querySelector('.category');
const btnCategory = document.createElement('button');
const btnPopular = document.createElement('button');
btnPopular.className = 'btnPopular';
btnPopular.textContent = 'Popular'
btnCategory.className = 'categoryBtn';
btnCategory.textContent = 'Top Rated';
containerCat.append(btnCategory, btnPopular);

let page = 1;
let endpoint = "movie/popular"
Btn_back.addEventListener("click", () => {
	if (page > 1) {
		page--;
		render(endpoint, page);
		console.log(page);
	}
});

Btn_next.addEventListener("click", () => {
	page++;
	render(endpoint, page);
	console.log(page);
});

btnCategory.addEventListener("click", () => {
    endpoint = "movie/top_rated";
    render(endpoint, page);
})

btnPopular.addEventListener("click", () => {
	endpoint = "movie/popular";
	render(endpoint, page);
})
