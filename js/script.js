// Variables
let pl1El = document.querySelector("#pl1");
let pl2El = document.querySelector("#pl2");
let gameboardEl = document.querySelector("#gameboard");
let playAgainEl = document.querySelector("#play-again");
let playAgainBtnEl = document.querySelector("#play-again-btn");
let game = {};


// Messages
game.setup = {
  starter: "black",
  piecesToWin: 4, 
  win: "The winner is ",
  draw: "Draw! One more time?",
  overlap: "Please choose an empty spot",
  boardLength: 6,
  boardHeight: 5
}


let gameboard = [
  [null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null],
]

// Event Listeners
playAgainBtnEl.addEventListener('click', () => location.reload());
gameboardEl.addEventListener("click", null);

// Functions


// Game piece falls to bottom

//Check for winer

