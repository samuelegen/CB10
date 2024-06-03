// esercizio-1 

let userName = prompt("Inserisci il tuo nome");
let userSurname = prompt("Inserisci il tuo cognome");


if (userName === null || userName.length < 3) {
    alert("Hai sbagliato nome")
    window.location.reload()
} else if(userSurname === null || userSurname.length <3) {
    alert("Hai sbagliato cognome")
    window.location.reload()
}

let upperFirstCharacter = userName[0].toUpperCase();
console.log(upperFirstCharacter)

let upperFirstCharacterSurname = userSurname[0].toUpperCase();
console.log(upperFirstCharacterSurname);

let nameText = `${userName[0].toUpperCase()}${userName.substring(1)}`

let surnameText =`${userSurname[0].toUpperCase()}${userSurname.substring(1)}` 
console.log(surnameText)

alert(`Ciao!! ${nameText} ${surnameText}`)

console.clear()
// esercizio-2

let score = 0
let cultur1 = prompt("Di che colore è il cielo?");
let cultur2 = prompt("Chi è il presidente della repubblica?");
let cultur3 = prompt("Qual'è la capitale dell'Italia?");
let cultur4 = prompt("Come di chiama l'isola in cui vivi?");

switch(cultur1){
   case 'blu': 
    score += 3;
    break;
    default: 
    score -= 1;
    break;
}

switch(cultur2){
    case 'mattarella': 
     score += 3;
     break;
     default: 
     score -= 1;
     break;
 }

 switch(cultur3){
    case 'roma': 
     score += 3;
     break;
     default: 
     score -= 1;
     break;
 }

 switch(cultur4){
    case 'sicilia': 
     score += 3;
     break;
     default: 
     score -= 1;
     break;
 }

 alert (" Hai vintooo!! Il punteggio che hai totalizzato è " + score );
