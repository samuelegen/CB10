const div = document.querySelector('.counter');
const p = document.createElement('p');
p.style.fontSize = '25px';
startBtn = document.createElement('button');
startBtn.textContent = 'Start';
stopBtn = document.createElement('button');
stopBtn.textContent = 'Stop';
div.style.display = 'flex';
div.style.flexDirection = 'column';
div.style.alignItems = 'center';
div.style.gap = '5px';

const runInterval = () => {
    let id = setInterval(() => {
        p.textContent = new Date();
        // console.log(p.textContent)
    },1000)
    return id
}

let intervallo = runInterval();

startBtn.addEventListener("click", () => {
    intervallo = runInterval();
    console.log('Tempo avviato')
})

stopBtn.addEventListener("click", () => {
    // Questa funzione interrompe l'avanzare del tempo.
    clearInterval(intervallo);
    console.log('Tempo in pausa');
})



// Questa funzione serve per far avanzare l'orologio o in generale settare un intervallo
// const setIntervalId = setInterval(() => {
//     p.textContent = new Date();
// },1000)

// Questa invece è la funzione per stoppare il tempo.
// setTimeout(() => {
    //     p.textContent = new Date();
    //     clearInterval(intervaId);
    // },1000)
    
    
div.appendChild(p);
div.append(startBtn, stopBtn);
    
