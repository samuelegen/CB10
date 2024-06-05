const parent = document.querySelector('.container');
const btn_1 = document.querySelector('.btn1');
btn_1.textContent = 'Button one';
const btn_2 = document.querySelector('.btn2');
btn_2.textContent = 'Button two';

parent.addEventListener("click", (event) => {
    if(event.target.className === 'btn1'){
        console.log('bottone_1')
        return
    }
    if(event.target.className === 'btn2'){
        console.log('bottone_2')
        return
    }
})

let modal = document.getElementById("myModal");
let closeModal = document.querySelector('.close');
let yes = document.querySelector('.yes');
yes.textContent = 'Yes';
let no = document.querySelector('.no');
no.textContent = 'No';

const btn_3 = document.querySelector('.btn3');
btn_3.textContent = 'Button modal';

let timer = 5000
btn_3.addEventListener("click", () => {
    modal.style.display = 'block';
    yes.addEventListener("click", () => {
        console.log(timer/1000, 'secondi')
        let timing = setInterval(() => {
                timer-=1000;
                console.log(timer/1000, 'secondi');
                if(timer == 0)
                    clearInterval(timing)
                },1000)
        let start = setInterval(() => {
            modal.style.display = 'none';
            console.log('La pagina è stata chiusa')
            clearInterval(start)
        },5000)
    })
    no.addEventListener("click", () => {
    let start_2 = setInterval(() => {
        modal.style.display = 'none';
        console.log('Pagina chiusa')
        clearInterval(start_2)
        },5000)
    })
})


close.onclick = function() {
    modal.style.display = "none";
}