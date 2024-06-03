const h1el2 = document.createElement('h1')
h1el2.innerHTML = 'Custom title'
document.body.append(h1el2);

// esercizio-1
const startEl = document.querySelector('.header');
startEl.insertAdjacentHTML('afterbegin','<p></p>');
const h1El = document.createElement('h1');
const paragraphEl = document.createElement('p');
startEl.insertAdjacentElement('afterbegin', h1El);
startEl.append(paragraphEl);

h1El.textContent = 'The Travel Blog';
h1El.style.fontSize = '50px';
h1El.style.display = 'flex';
h1El.style.justifyContent = 'center';

paragraphEl.textContent = 'Benvenuti nel mio blog';
paragraphEl.style.fontSize = '30px';
paragraphEl.style.display = 'flex';
paragraphEl.style.justifyContent = 'center';


// esercizio-2
const buttonEl = document.createElement('button');
startEl.insertAdjacentElement('afterend', buttonEl);
buttonEl.textContent = '0';
buttonEl.style.width = '30px';
buttonEl.style.height = '30px';
buttonEl.style.marginLeft = '20px';
buttonEl.style.backgroundColor = 'grey';
buttonEl.onmouseenter = function() {
    buttonEl.innerHTML++
    console.log(buttonEl.innerHTML);
    buttonEl.style.backgroundColor = 'green';
    buttonEl.style.width = '40px';
    buttonEl.style.height = '40px';
    if(buttonEl.innerHTML >= 7){
        buttonEl.style.backgroundColor = 'purple';
        buttonEl.style.width = '80px';
        buttonEl.style.height = '80px';
    }
    if(buttonEl.innerHTML >= 15){
        buttonEl.style.backgroundColor = 'gold';
        buttonEl.style.width = '120px';
        buttonEl.style.height = '120px';
    }
}

buttonEl.onclick = function() {
    buttonEl.innerHTML++
    console.log(buttonEl.innerHTML);
    buttonEl.style.backgroundColor = 'green';
    buttonEl.style.borderRadius = '50%';
    buttonEl.style.width = '40px';
    buttonEl.style.height = '40px';
    if(buttonEl.innerHTML >= 7){
        buttonEl.style.backgroundColor = 'purple';
        buttonEl.style.width = '80px';
        buttonEl.style.height = '80px';
    }
    if(buttonEl.innerHTML >= 15){
        buttonEl.style.backgroundColor = 'gold';
        buttonEl.style.width = '120px';
        buttonEl.style.height = '120px';
    }
}

// esercizio-3
const inputEl = document.querySelector('input');
const formEl = document.querySelector('form');
const listaEl = document.querySelector('.list');

const btnForm = document.querySelector('.Btn');
btnForm.style.marginTop = '10px';
btnForm.style.marginLeft = '20px';
btnForm.style.backgroundColor = 'grey';
btnForm.style.borderRadius = '10px'

formEl.onsubmit = function(event) {
    event.preventDefault();
    console.log(event)
    const testo = inputEl.value;
    console.log(testo)
    const elementEl = document.createElement('li');
    elementEl.innerHTML = testo
    inputEl.value = " ";
    if(!isNaN(testo)) {
        console.log(testo, 'Non valido');
    } else if(testo.includes(" ") && typeof testo === "string") {
        listaEl.insertAdjacentElement("beforeend", elementEl);
    }
}