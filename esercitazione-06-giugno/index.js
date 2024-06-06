const content = document.querySelector('.container');
const listEl = document.createElement('div');
listEl.className = ('lista');
content.append(listEl);
const btn = document.querySelector('.btn');

const none = content.style.display = 'none';

btn.addEventListener("click", () => {
    if(content.style.display === 'none') {
        content.style.display = 'block';
    } else {
        content.style.display = 'none';
    }
})
    

fetch("https://fakestoreapi.com/products").then((res) => {
    return res.json();
}).then((response) => {
    console.log(response)
    response.forEach((items) => {
    const listEl = document.createElement('div');
    // listEl.classList.add('listItem')  Altro modo per dare una class a tutta la lista
    listEl.className = ('lista')

    const titleEl = document.createElement('h2');
    titleEl.textContent = items.title;

    const imageEl = document.createElement('img')
    imageEl.src = items.image;
    imageEl.style.width = '70px'

    const priceEl = document.createElement('p')
    priceEl.textContent = `Price: € ${items.price}`;

    listEl.append(titleEl, imageEl, priceEl);
    content.append(listEl);
    })
})
