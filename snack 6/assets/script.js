// Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.

const limit = parseInt (prompt('quanti cubi?')) //prompt

for (let i = 1; i <= limit; i++) {
  const cubo =Math.pow(i,3);
  console.log(cubo);
}