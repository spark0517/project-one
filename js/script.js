// Variables
let pl1El = document.querySelector("#pl1");
let pl2El = document.querySelector("#pl2");
let playAgainEl = document.querySelector("#play-again");
let playAgainBtnEl = document.querySelector("#play-again-btn");
let game = {};
let player;
let totalTurns = 0;
const gameboardEl = document.querySelector(".gameboard");
const piece = document.getElementsByClassName("piece");


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
  [0, 0, 0, 0, 0, 0],  // Column 0
  [0, 0, 0, 0, 0, 0],  // Column 1
  [0, 0, 0, 0, 0, 0],  // Column 2
  [0, 0, 0, 0, 0, 0],  // Column 3
  [0, 0, 0, 0, 0, 0],  // Column 4
  [0, 0, 0, 0, 0, 0],  // Column 5
  [0, 0, 0, 0, 0, 0],  // Column 6
  ];

// Event Listeners
playAgainBtnEl.addEventListener('click', () => location.reload());

gameboardEl.addEventListener("click", function(e){
  changeColor(e)
})


// Functions

function checkPlayerTurn(){
  return player = totalTurns % 2
}

function changeColor(e){
    console.log(e.target, 'check for divs')
    console.log(e.target.tagName)

    if (e.target.tagName === 'DIV' && player ){
      e.target.style.backgroundColor = 'red';
      totalTurns++
    } 
    else if (e.target.tagName === 'DIV' && !player ){
      e.target.style.backgroundColor = 'yellow';
      totalTurns++
    }
    
    checkPlayerTurn()
}
//Make condition so colored circle can not change colors.

// Game piece falls to bottom
/*
- Check circle underneath to see if white or colored.
  - if white, check circle below that
  - if colored, stay
  - repeat until bottom. if bottom, stay.


*/


//Check for winner
