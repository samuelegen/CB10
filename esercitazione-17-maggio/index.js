// esercizio-1 

let numbers = [-1, -2, -10, 2, 5];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        console.log(numbers[i]);
    }
}

for (let i = 0; i < numbers.length; i++){
    if (numbers[i] = 2){  //si può inserire anche if (numbers[i] > 0)
        console.log(numbers[i]);
        break
    }
    
}


// esercizio-2

let parolaUser = prompt('inserisci una parola palindroma');
let start = 0;
let palindroma = true;
let end = parolaUser.length -1;
for(; start < end; start++, end--){
    if(parolaUser[start] !== parolaUser[end]){
        console.log('parola non palindroma')
        palindroma = false;
        break
    }
}
if (palindroma){
    console.log('parola palindroma');
}