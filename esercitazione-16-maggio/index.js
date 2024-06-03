// esercizio-1

let score = 0;
let request1 = prompt("Qual'è la capitale della Francia?\n Roma, Parigi, Berlino");
let request2 = prompt("Qual'è il capoluogo della Sicilia?\n Catania, Palermo, Trapani");

const correctAnswer = ['Parigi', 'Palermo'];
const length = correctAnswer.length;
switch(request1){
    case 'Parigi':
    score += 3;
    break;
    default:
    score -= 1;
    break;
}

switch(request2){
    case 'Palermo':
    score += 3;
    break;
    default:
    score -= 1;
    break;
}

alert(`Il tuo punteggio è di: ${score}`);
if (score < 0) {
    alert("Hai perso!!")
} else if (score = 6) {
    alert("Hai vinto!!") 
}
console.log({correctAnswer, length});

// esercizio-2
const vocali = "aeiou"
const consonanti = "abcdefghijklmnopqrstuvwxyz"

let parola1 = prompt('Scrivi una parola..');
let lettera1 = parola1.at(0).toLowerCase();
if (!consonanti.includes(lettera1)) {
    console.log("La parola inserita non è valida");
} else {
    console.log(`La parola (${parola1}) inizia con una ${vocali.includes(lettera1) ? "vocale" : "consonante"}.`);
}

let parola2 = prompt('Scrivi una parola..');
let lettera2 = parola2.at(0).toLowerCase();
if (!consonanti.includes(lettera2)) {
    console.log("La parola inserita non è valida");
} else {
    console.log(`La parola (${parola2}) inizia con una ${vocali.includes(lettera2) ? "vocale" : "consonante"}.`);
}

let parola3 = prompt('Scrivi una parola..');
let lettera3 = parola3.at(0).toLowerCase();
if (!consonanti.includes(lettera3)) {
    console.log("La parola inserita non è valida");
} else {
    console.log(`La parola (${parola3}) inizia con una ${vocali.includes(lettera3) ? "vocale" : "consonante"}.`);
}



// esercizio-3
const user = prompt('Inserisci una parola..')
const userArray = user.split('');
userArray.reverse();
const userRevers = userArray.join('');
console.log(userRevers);



