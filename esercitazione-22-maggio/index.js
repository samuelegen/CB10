// esercizio-1
function indicazioni(...direction){
    for(let i = 0; i < direction.length; i++){
      console.log(direction[i])
    }

}
indicazioni('su', 'sinistra', 'destra', 'su');

// esercizio-2
function contaIndicazioni(...directions){
    const conto = {
         su: 0, 
         giu: 0, 
         destra: 0, 
         sinistra: 0 
        };
    for(let i = 0; i < directions.length; i++){
        if(directions[i] == 'su'){
            conto.su += 1;
        }
        if(directions[i] == 'giu'){
            conto.giu += 1;
        }
        if(directions[i] == 'destra'){
            conto.destra += 1;
        }
        if(directions[i] == 'sinistra'){
            conto.sinistra += 1;
        }
      }
  
    return conto;
}
console.log(contaIndicazioni('giu', 'su', 'destra', 'su', 'sinistra', 'sinistra', 'su', 'giu', 'giu', 'destra', 'su'))


// // esercizio-3
let conto = 0;
const contoClick = () => {
    conto += 1
    console.log(conto)
}
document.body.onclick = contoClick;