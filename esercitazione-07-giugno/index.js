import { API_KEY } from "./keys.js";

const container = document.querySelector('.container');
const listEl = document.createElement('div');
listEl.className = 'listContainer';
const searchBarEl = document.querySelector('.searchBar')
container.append(listEl);

fetch('https://api.themoviedb.org/3/movie/popular', API_KEY)
.then((res) => res.json())
.then((response) => {
    console.log(response);
    function createElement(items) {
        listEl.innerHTML = ""
        items.forEach((item) => {
            const listItemEl = document.createElement('div');
                listItemEl.className = 'listItems';
                // Imposta l'immagine di sfondo
                listItemEl.style.backgroundImage = `url(https://image.tmdb.org/t/p/w500${item.backdrop_path})`;

            const backEl = document.createElement('img');
                backEl.className = 'backImg';

            const titleEl = document.createElement('h2');
                titleEl.className = 'titleTxt'
                titleEl.textContent = item.title;

            const poster = document.createElement('img');
                poster.className = 'posterImg'
                poster.src = `https://image.tmdb.org/t/p/w500${item.poster_path}`;

            listItemEl.append(backEl, titleEl, poster);
            listEl.append(listItemEl);
        });
        }
    createElement(response.results); // Passare l'array dei risultati alla funzione

    // Funzione per filtrare i prodotti
    function filterProducts(inputValue, items) {
        const filteredProducts = items.filter((item) => 
            item.title.toLowerCase().includes(inputValue)
        );
        createElement(filteredProducts);
    }

    // Aggiungere l'evento alla barra di ricerca
    searchBarEl.addEventListener("input", (event) => {
        const inputValue = event.target.value.toLowerCase();
        filterProducts(inputValue, response.results);
    });

})
.catch((error) => {
    console.error('Questo è un errore:', error);
});
    
