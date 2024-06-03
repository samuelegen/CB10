// esercizio-1
let headEl = document.querySelector('#heading');
console.log(headEl);

// esercizio-2
const buttonEls = document.querySelectorAll('button');
for(let el of buttonEls){
    console.log(el.innerHTML)
}

// esercizio-3
let clickBtn = document.querySelector('button');
let resetBtn = document.querySelectorAll('button')[1];
clickBtn.onclick = function() {
    let conversione = Number(clickBtn.innerHTML);
    if(isNaN(conversione)){
        clickBtn.innerHTML = 0
    }
    if(!isNaN(conversione)){
        clickBtn.innerHTML++
    }
    console.log(clickBtn.innerHTML)
}

resetBtn.onclick = function() {
    clickBtn.innerHTML = 0
}


