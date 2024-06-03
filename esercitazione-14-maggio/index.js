// esercizio-1*/
let esempio = "ciao mondo";
let esempio2 = 'mio zio viene dalla città di l\'acquila';
let esempio3 = `${esempio} lo sai che \n ${esempio2}`;
console.log(esempio3);


// esercizio-2*/
let esempio4 = esempio.toUpperCase();
console.log(esempio4);

let text = prompt("Inserisci i tuoi dati");
console.log(text.toLowerCase());

const textLower = text.toLowerCase(); // si può fare anche in questo modo

console.clear()
// esercizio-3*/
let input = prompt('Dammi un numero da 1 a 10!');
        input = number(input);
        if(input > 7){
            console.log("Hai vinto!!");
        } else {
            console.log("Hai perso!!")
        }