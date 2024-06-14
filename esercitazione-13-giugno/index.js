const inputTitleEl = document.querySelector(".title");
const inputPriceEl = document.querySelector(".price");
const inputDescriptionEl = document.querySelector(".description");
const inputCategoryEl = document.querySelector(".category_id");
const inputImagesEl = document.querySelector(".images");
const buttonSendEl = document.querySelector(".button-invia");
// const inputDelete = document.querySelector('.eliminaId');
// const deleteBtn = document.querySelector('.deleteBtn');

const BASE_URL = "https://api.escuelajs.co/";
const getProductEndpoint = "api/v1/products";
const url = BASE_URL + getProductEndpoint;

const Get = async (product) => {
	const getObj = await fetch(url, {
		method: "GET",
		headers: {
			"Content-Type": "application/json; charset=utf-8",
		},
		body: JSON.stringify(product),
	});
	const response = await getObj.json();
	console.log(response);
	return response;
};
Get();

const POST = async (product) => {
	try {
		const res = await fetch(`${url}`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json; charset=utf-8",
			},
			body: JSON.stringify(product),
		});
		const data = await res.json();
		console.log(url);
		return data.id;
	} catch (err) {
		console.log("ERRORE CATCH", err);
	}
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

const deleteById = async (id) => {
	const resDelete = await fetch(`${url}/${id}`, {
		method: "DELETE",
	});

	const data = await resDelete.json();

	console.log(data);
};
// deleteById(917);

const PUT = async (id, product) => {
	fetch(`${url}/${id}`, {
		headers: {
			"Content-Type": "application/json;",
		},
		body: JSON.stringify(product),
	});
	const data = res.json();
	return data;
};
