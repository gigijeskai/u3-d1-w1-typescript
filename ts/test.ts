// let giocatore1 = document.getElementById("gioc1") as HTMLInputElement;
// let value1 = parseInt(giocatore1?.value);
// console.log(value1);

// let giocatore2 = document.getElementById("gioc2") as HTMLInputElement;
// let value2 = parseInt(giocatore2?.value);
// console.log(value2);
// let giocatore1 = 1
// let giocatore2 = 100

// function createRandomNumber() {
//   let numberRandom: number = Math.floor(Math.random() * (100 - 1) + 1);
//   return numberRandom;
// }

// let randomNumber = createRandomNumber();
// console.log(randomNumber);

// if (giocatore1 === randomNumber) {
//   console.log("1: Hai VINTO!");
// } else if (giocatore2 === randomNumber) {
//   console.log("2: Hai VINTO!");
// } else if (Math.abs(randomNumber - giocatore1) < 50) {
//   console.log("Il giocatore1 si è avvicinato di più");
// } else {
//   console.log("Il giocatore2 si è avvicinato di più");
// }
// let valueInput1;
// let inputValue
// function pressButton(){
//     let inputValue = document.getElementById('gioc1') as HTMLInputElement;
//  valueInput1 = parseInt(inputValue?.value)
// return valueInput1
// }

// console.log(valueInput1);

let player_1: Number;
let player_2: Number;

let input1 = document.querySelector("#player1") as HTMLInputElement;
// htmlinputelement è il modo di prendere il valore dell'input prendendo il value dal nodo dell'html
let input2 = <HTMLInputElement>document.querySelector("#player2");
// htmlinputelement è la stessa cosa di quello scritto sopra, in questo modo si chiama cast
let btn = document.querySelector("#button");
// if (btn) {
btn?.addEventListener("click", guessNumber);
// addeventlistner prende 2 parametri che sono l'evento e la funzione da richiamare con l'evento
// il ? va a sostituire l'if, è sintactic sugar e serve a far funzionare il bottone solo se c'è assicurandomi un corretto funzionamento
// }

function guessNumber() {
  player_1 = Number(input1.value);
  player_2 = Number(input2.value);
  // parso in numero intero input.value perchè mi restituisce una stringa ma la variabile player è di tipo number e quindi non accetta una stringa

  let randomNumber = Math.floor(Math.random() * (100 - 1) + 1);
  console.log("player1: " + player_1);
  console.log("player2: " + player_2);
  console.log("randomNumber: " + randomNumber);
  let difPlayer1 = Math.abs(randomNumber - player_1);
  let difPlayer2 = Math.abs(randomNumber - player_2);

  if (player_1 === randomNumber) {
    console.log("player_1 won");
  } else if (player_2 === randomNumber) {
    console.log("player_2 won");
  } else if (difPlayer1 < difPlayer2) {
    console.log("player1 he almost guessed it");
  } else if (difPlayer1 === difPlayer2) {
    console.log("equal");
  } else {
    console.log("player2 he almost guessed it");
  }
}
guessNumber();
