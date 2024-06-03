//esercizio-1 
console.log('ciao questa è una prova')
function clearPage(){
    console.clear()
}
clearPage()

// esercizio-2
function capitalize(string){
    let primoCarattere = string[0].toUpperCase();
    let end = string.slice(1).toLowerCase();
    return `${primoCarattere}${end}`;
   
}
console.log(capitalize('ciao'));
console.log(capitalize('mondo'));
console.log(capitalize('benvenuto'));

// esercizio-3
function numeri(a, b){
    if(!isNaN(a) && !isNaN(b)){
        if(a<b)
            return a;
        if(a>b)
            return b;
        if(a===b)
            return 'Sono uguali'
    }
    return 'ERRORE'

}
console.log(numeri(1,3));
console.log(numeri(200,100));
console.log(numeri('a',5));
console.log(numeri(8,8))

// esercizio-4
function potenza(base, esponente){
    let risultato = 1
    for(let i=0; i < esponente; i++){
        risultato = risultato * base
    }
    return risultato
}
console.log(potenza(5,5))

// esercizio-5
function fattoriale(conto){
    for(let i = 0; i < conto; i++){
        conto *= conto(-1)
    }
    return risultato
}
    console.log(fattoriale(5))