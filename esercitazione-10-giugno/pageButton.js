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
const btnNow = document.createElement('button');
btnPopular.className = 'btnPopular';
btnPopular.textContent = 'Popular'
btnCategory.className = 'categoryBtn';
btnCategory.textContent = 'Top Rated';
btnNow.className = 'btnNow';
btnNow.textContent = 'Upcoming'
containerCat.append(btnCategory, btnPopular, btnNow);

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
    render("movie/top_rated", page);
})

btnPopular.addEventListener("click", () => {
	render(endpoint, page);
})

btnNow.addEventListener("click", () => {
	render('movie/upcoming', page);
})
