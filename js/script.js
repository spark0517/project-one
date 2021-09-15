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

// Board
let gameboard = [
  [0, 0, 0, 0, 0, 0, 0],  // Row 0
  [0, 0, 0, 0, 0, 0, 0],  // Row 1
  [0, 0, 0, 0, 0, 0, 0],  // Row 2
  [0, 0, 0, 0, 0, 0, 0],  // Row 3
  [0, 0, 0, 0, 0, 0, 0],  // Row 4
  [0, 0, 0, 0, 0, 0, 0],  // Row 5

  // [null, null, null, null, null, null, null],
  // [null, null, null, null, null, null, null],
  // [null, null, null, null, null, null, null],
  // [null, null, null, null, null, null, null],
  // [null, null, null, null, null, null, null],
  // [null, null, null, null, null, null, null],
  ];

// Winning Arrays
const winArray = [
  [0, 1, 2, 3],
  [7, 8, 9, 10],
  [14, 15, 16, 17],
  [21, 22, 23, 24],
  [28, 29, 30, 31],
  [35, 36, 37, 38],
  [6, 5, 4, 3],
  [13, 12, 11, 10],
  [20, 19, 18, 17],
  [27, 26, 25, 24],
  [34, 33, 32, 31],
  [41, 40, 39, 38],
  [1, 2, 3, 4],
  [5, 4, 3, 2],
  [8, 9, 10, 11],
  [12, 11, 10, 9],
  [15, 16, 17, 18],
  [19, 18, 17, 16],
  [22, 23, 24, 25],
  [26, 25, 24, 23],
  [29, 30, 31, 32],
  [33, 32, 31, 30],
  [36, 37, 38, 39],
  [40, 39, 38, 37],
  //columns
  [0, 7, 14, 21],
  [1, 8, 15, 22],
  [2, 9, 16, 23],
  [3, 10, 17, 24],
  [4, 11, 18, 25],
  [5, 12, 19, 26],
  [6, 13, 20, 27],
  [41, 34, 27, 20],
  [40, 33, 26, 19],
  [39, 32, 25, 18],
  [38, 31, 24, 17],
  [37, 30, 23, 16],
  [36, 29, 22, 15],
  [35, 28, 21, 14],
  [7, 14, 21, 28],
  [8, 15, 22, 29],
  [9, 16, 23, 30],
  [10, 17, 24, 31],
  [11, 18, 25, 32],
  [12, 19, 26, 33],
  [13, 20, 27, 34],
  //diagonal rows
  [0, 8, 16, 24],
  [7, 15, 23, 31],
  [14, 22, 30, 38],
  [6, 12, 18, 24],
  [13, 19, 25, 31],
  [20, 26, 32, 38],
  [41, 33, 25, 17],
  [34, 26, 18, 10],
  [27, 19, 11, 3],
  [35, 29, 23, 17],
  [28, 22, 16, 10],
  [21, 15, 9, 3],
  [36, 30, 24, 18],
  [5, 11, 17, 23],
  [37, 31, 25, 19],
  [4, 10, 16, 22],
  [2, 10, 18, 26],
  [39, 31, 23, 15],
  [1, 9, 17, 25],
  [40, 32, 24, 16],
  [9, 17, 25, 33],
  [8, 16, 24, 32],
  [11, 17, 23, 29],
  [12, 18, 24, 30]
]


// Event Listeners
playAgainBtnEl.addEventListener('click', () => location.reload());

gameboardEl.addEventListener("click", function(e){
  changeColor(e)
})

// Functions
function init (){
  render()
}

function render (){
  console.log(gameboard)
}

function checkPlayerTurn(){
  return player = totalTurns % 2
}

function changeColor(e){
  //console.log(e.target, "check for divs")
  //console.log(e.target.tagName)

  let idx = e.target.id
  let x = Math.floor(idx / 7)
  let y = idx % 7

  if (e.target.tagName === "DIV" && player ){
    e.target.style.backgroundColor = "red";
    gameboard[x][y] = "red"
    totalTurns++
  } 
  else if (e.target.tagName === "DIV" && !player ){
    e.target.style.backgroundColor = "yellow";
    gameboard[x][y] = "yellow"
    totalTurns++
  }
  //checkWin()
  checkPlayerTurn()
  render()
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

function checkWin(){
  
  
  
  console.log(piece)
}

