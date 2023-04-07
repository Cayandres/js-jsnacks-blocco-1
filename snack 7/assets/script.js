// Stampa le potenze di 2 fino a 1000.
//  questo snack cela un trabocchetto:  1000 non è una potenza di 2

const limit = 1000;
let potenza = 1;

while (potenza < limit){
  console.log(potenza); //li stampiamo prima perchè se lo stampiamo dopo aggiunge un numero
potenza *=2;
}
