const dice = document.getElementById("dice");
const button = document.getElementById("button");
const records = document.getElementById("records");

let randomNumber = () => {

  let number = Math.round( (Math.random() * 5 ) + 1);
  dice.innerHTML = number;
}

button.onclick = () => randomNumber();




