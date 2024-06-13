const inputTitleEl = document.querySelector(".title");
const inputPriceEl = document.querySelector(".price");
const inputDescriptionEl = document.querySelector(".description");
const inputCategoryEl = document.querySelector(".category_id");
const inputImagesEl = document.querySelector(".images");
const buttonSendEl = document.querySelector(".button-invia");

const BASE_URL = "https://api.escuelajs.co/";
const getProductEndpoint = "api/v1/products";
const url = BASE_URL + getProductEndpoint;

const POST = async (product) => {
	const res = await fetch(`${url}`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json;",
		},
		body: JSON.stringify(product),
	});

	const data = await res.json();
	console.log(url);

	return data.id;
};

buttonSendEl.addEventListener("click", async (e) => {
	e.preventDefault();
	const objProductForm = {
		title: inputTitleEl.value,
		price: inputPriceEl.value,
		description: inputDescriptionEl.value,
		categoryId: inputCategoryEl.value,
		images: [inputImagesEl.value],
	};

	const productId = await POST(objProductForm);

	console.log(`ID: ${productId}`);
});
