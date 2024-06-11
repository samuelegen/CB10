const container = document.querySelector(".container");
const listEl = document.createElement("div");
listEl.className = "listContainer";
container.append(listEl);

export function createElement(items) {
  listEl.innerHTML = "";
  items.forEach((item) => {
    const listItemEl = document.createElement("div");
    listItemEl.className = "listItems";
    // Imposta l'immagine di sfondo
    listItemEl.style.backgroundImage = `url(https://image.tmdb.org/t/p/w500${item.backdrop_path})`;

    const backEl = document.createElement("img");
    backEl.className = "backImg";

    const titleEl = document.createElement("h2");
    titleEl.className = "titleTxt";
    titleEl.textContent = item.title;

    const poster = document.createElement("img");
    poster.className = "posterImg";
    poster.src = `https://image.tmdb.org/t/p/w500${item.poster_path}`;

    listItemEl.append(backEl, titleEl, poster);
    listEl.append(listItemEl);
  });
}
