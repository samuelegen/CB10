const inputTitleEl = document.querySelector(".title");
const inputPriceEl = document.querySelector(".price");
const inputDescriptionEl = document.querySelector(".description");
const inputCategoryEl = document.querySelector(".category_id");
const inputImagesEl = document.querySelector(".images");
const buttonSendEl = document.querySelector(".button-invia");
const buttonSearchById = document.querySelector(".searchBtn");
const inputSearchById = document.querySelector(".search");

const BASE_URL = "https://api.escuelajs.co/";
const getProductEndpoint = "api/v1/products";
const url = BASE_URL + getProductEndpoint;

const Get = async (id = "") => {
	const getObj = await fetch(`${url}/${id}`);
	const response = await getObj.json();
	console.log(response);
	return response;
};
Get();

// Selezioniamo un prodotto scrivendo il suo ID e i campi correlati verranno compilati automaticamente
let id = "";
buttonSearchById.addEventListener("click", async (e) => {
	id = inputSearchById.value;

	const result = await Get(id);
	console.log(result);
	inputTitleEl.value = result.title;
	inputPriceEl.value = result.price;
	inputDescriptionEl.value = result.description;
	inputCategoryEl.value = result.category.id;
	inputImagesEl.value = result.images.join("").replace(/[\[\]"]/g, "");
});

// Adesso diamo il comando al button quando eseguiamo il click di modificare l'elemento dell'API con il metodo PUT

buttonSendEl.addEventListener('click', async (e) => {
    try {
        if (inputTitleEl.value === "") {
            throw new Error("Errore: Il titolo non può essere vuoto");
        }

        const updateProduct = {
            title: inputTitleEl.value,
            price: inputPriceEl.value,
            description: inputDescriptionEl.value,
            categoryId: inputCategoryEl.value,
            images: [inputImagesEl.value]
        };

        const modified = await PUT(id, updateProduct);
        console.log(modified);
    } catch (error) {
        console.error(error.message);
    }
});

const PUT = async (id, updateProduct) => {
    console.log('PUT', id, updateProduct);
    try {
        const res = await fetch(`${url}/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(updateProduct)
        });
        const data = await res.json();
        return data;
    } catch (err) {
        console.error("Errore durante l'aggiornamento del prodotto:", err);
    }
};