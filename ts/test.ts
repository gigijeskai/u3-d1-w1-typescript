
// let giocatore1 = document.getElementById("gioc1") as HTMLInputElement;
// let value1 = parseInt(giocatore1?.value);
// console.log(value1);

// let giocatore2 = document.getElementById("gioc2") as HTMLInputElement;
// let value2 = parseInt(giocatore2?.value);
// console.log(value2);
let giocatore1 = 1
let giocatore2 = 100

function createRandomNumber() {
  let numberRandom: number = Math.floor(Math.random() * (100 - 1) + 1);
  return numberRandom;
}

let randomNumber = createRandomNumber();
console.log(randomNumber);

if (giocatore1 === randomNumber) {
  console.log("1: Hai VINTO!");
} else if (giocatore2 === randomNumber) {
  console.log("2: Hai VINTO!");
} else if (Math.abs(randomNumber - giocatore1) < 50) {
  console.log("Il giocatore1 si è avvicinato di più");
} else {
  console.log("Il giocatore2 si è avvicinato di più");
}
// let valueInput1;
// let inputValue
// function pressButton(){
//     let inputValue = document.getElementById('gioc1') as HTMLInputElement;
//  valueInput1 = parseInt(inputValue?.value)
// return valueInput1
// }

// console.log(valueInput1);



