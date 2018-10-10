// Lowdash library
const _ = require('lodash');
const vanillaTilt = require('vanilla-tilt');

VanillaTilt.init(document.querySelector(".playerContainer"), {
    max: 25,
    speed: 400,
    scale: 1.08,
});

// DOM elements
const dice = document.getElementById("dice");
const button = document.getElementById("button");
const human = document.querySelector(".playerContainer");
const machine = document.querySelector(".cpuContainer");

// init variables
let started = false;
let humanNumbers = [];
let machineNumbers = [];

let randomNumber = () => {
  
  //check if this is the first time you push button
  (started == false ? startGame() : true );

  let number = Math.round( (Math.random() * 89 ) + 1);
  dice.innerHTML = number;

  // cross the number in cards
  crossNumber(number);
}

let crossNumber = (_number) => {

    console.log(_number);

    let num = document.querySelector(`.number.n${_number}`);
    num.classList.add("tachado");
}

let startGame = () => {
    started = true;
    generateCards(humanNumbers);
    generateCards(machineNumbers);
    showNumbers(humanNumbers, human);
    showNumbers(machineNumbers, machine);
}

let showNumbers = (_array, _domElement) => {

    _array.forEach((e) => {
        
        let div = document.createElement("div");
        div.className = `number n${e}`;
        div.textContent = e;
        _domElement.appendChild(div);
    });
}

let generateCards = (_array) => {
    // generate random numbers and shuffle them
    let range = _.range(1,91);
    let shuffledRange = _.shuffle(range);

    for(let i = 0; i < 15; i++) {
        // push numbers in _array, avoiding duplicates (every one is unique)
        _array.push(shuffledRange[i]);
    }
}

button.onclick = () => randomNumber();




