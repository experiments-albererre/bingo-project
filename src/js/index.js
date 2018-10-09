// Lowdash library
const _ = require('lodash');

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

  let number = Math.round( (Math.random() * 5 ) + 1);
  dice.innerHTML = number;

      // and then cross the number in cards

}

let startGame = () => {
    started = true;
    generateCards(humanNumbers);
    generateCards(machineNumbers);
    human.innerHTML = showNumbers(humanNumbers);
    machine.innerHTML = showNumbers(machineNumbers);
}

let showNumbers = (_array) => {
    let _output;

        for(let i = 0; i < _array.length ; i++) {

        }

    return _output;
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




