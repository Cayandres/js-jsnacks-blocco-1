// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array

const emptyArr = [];

let message;

for (let i = 0; i < 6; i++) {
  const numInserito = parseInt(prompt('Inserisci un numero')) ;

  if(numInserito % 2 !== 0){
    message = numInserito
    emptyArr.push(numInserito)//inserico nel array i numeri dispari
  }
  
  console.log(message);
  
}
console.log(emptyArr);