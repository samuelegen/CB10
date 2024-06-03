const coder = {
    firstName: 'Luca', // coppia chiave - valore : "firstName" - "Luca"
    lastName: 'Pagliaro',
    age: 29,
    skills: ['JavaScript', 'HTML', 'CSS'],
    address: {
        city: 'Catania',
        zipCode: '95100'
    }
};

// esercizio-1
console.log(coder.skills[0]);
console.log(coder.skills[1]);
console.log(coder.skills[2]);
// for(let value of coder.skills) {
//     console.log(value)
// } si può fare anche in questo modo

//esercizio-2
coder.address['country'] = prompt('Quale musica country ti piace?')
coder.address['street'] = prompt('Sei un tipo street?')
console.log(coder.address)

//esercizio-3
for(let key in coder){
    console.log(key)
}


// esercizio-4
let vocali = 'aeiouAEIOU'
for(let key in coder){
    if(vocali.includes(key[0])){
        console.log(`${key}: ${coder[key]}`)
    }
}

// esercizio-5
let key = prompt('Inserisci una categoria.');
let value = prompt('Inserisci gli elementi della categoria.');
coder[key] = value
console.log(coder)