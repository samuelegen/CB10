import { Get } from "./GET.js";
import { createElement } from "./createElement.js";
import "./pageButton.js";
import "./filterProduct.js";
// Variabile che si modifica tramite i button per cambiare le pagine


// Get("movie/popular", 1);
// export const popularObj = await Get("movie/popular", pageNumber);
// createElement(popularObj.results); // Passare l'array dei risultati alla funzione

// Per cambiare endpoint basta aggiungere un nuovo parametro prima di pageNumber 
// dentro get cambiare da stringa a endpoint
let category = "movie/popular"
let page = 1
export const render = async (endpoint, pageNumber) => {
  const popularObj = await Get(endpoint, pageNumber);
	createElement(popularObj.results);
  };
// Dopo aver cambiato parametro bisogna aggiungerlo anche a render()
render(category, page);

// const render = async () => {
//     let response = await fetch(`https://api.themoviedb.org/3/movie/popular?page=${pageNumber}&include_adult=false`, API_KEY);
//     let data = await response.json();
//     console.log(data)

// Questo è il metodo fetch per chiamare le API
// fetch('https://api.themoviedb.org/3/movie/popular', API_KEY)
// .then((res) => res.json())
// .then((response) => {
// console.log(response);


