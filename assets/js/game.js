// ---------------------------------------- Initialise variables

// ------- All possible winning combinations -------
const wins = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
];

let oWins = 0;          // Count of player O wins
let xWins = 0;          // Count of player X wins
let gamesPlayed = 0;    // Count of all games played
let omoves = [];        // Define empty player O moves array
let xmoves = [];        // Define empty player X moves array
let playedMoves = [];   // Define empty moves array

playerTurn = "O";       // Set the player O to begin the first game

// ---------------------------------------- New Game

function newGame() {
  clearBoard();
  emptyArrays();
  addGameCounter();
  if (gamesPlayed % 2 == 0) {
    playerTurn = "X";
  } else {
    playerTurn = "O";
  }
}

// ---------------------------------------- Clear board

function clearBoard() {
  let squares = document.getElementsByClassName('square');
  for (let square of squares) {
    square.backgroundColor = "white";
    square.color = "black";
    square.innerHTML = "";
    };
  };

// ---------------------------------------- Empty move arrays

function emptyArrays() {
  omoves.length = 0;
  xmoves.length = 0;
  playedMoves.length = 0;
}

// ---------------------------------------- Increment game counter

function addGameCounter() {
  gamesPlayed ++;
}

// ---------------------------------------- Display player turn

function displayPlayerTurn(player) {
let moveDisplay = document.getElementById('playerToPlay');
moveDisplay.innerHTML=`${player} to play`;
}

// ---------------------------------------- Player move

document.addEventListener('DOMContentLoaded', function() {
  let squares = document.getElementsByClassName('square');
  for (let square of squares) {
    square.addEventListener("click", function() {
      if (playerTurn == "O") {
        if (checkMove(square.id*1)) {
          this.textContent = "O";
          omoves.push(square.id*1);
          console.log("Square", square.id*1);
          console.log("Omoves", omoves);
          checkForWin();
        };
      } else {
        if (checkMove(square.id*1)) {
          this.textContent = "X";
          xmoves.push(square.id*1);
          console.log("Square", square.id*1);
          console.log("Xmoves", xmoves);
          checkForWin();
        };
      };
    });

// ---------------------------------------- Highlight cursor

          square.addEventListener("mouseover", function() {
              this.style.backgroundColor = "pink";
          })
  
          square.addEventListener("mouseout", function() {
              this.style.backgroundColor = "white";
          })
      };
// ---------------------------------------- Button listeners

      let buttons = document.getElementsByTagName('button');
      for (let button of buttons) {
          button.addEventListener("click", function() {
              if (this.getAttribute("data-type") === "new-game") {
                  newGame();
              } else if (this.getAttribute("data-type") === "instructions") {
                  showInstructions(); 
              } else if (this.getAttribute("data-type") === "reset") {
                  console.log("Reset");
              } else {
                  console.log("ERROR");
              };
  
          }); 
      };   
});

// ---------------------------------------- Check for valid move

function checkMove(move) {
  if (!playedMoves.includes(move)) {
    addPlayedMove(move);
    return true;
  } else {
    return false;
  }
}

// ---------------------------------------- Add move to playedMoves Array

function addPlayedMove(move) {
  playedMoves.push(move);
}

// ---------------------------------------- Check for win

function checkForWin() {
  for (let win of wins) {
      if (checkSubset(omoves, win)) {
          let winningLine = win;
          console.log("O WINS");
          displayWinningLine(winningLine);
          addOWin();
      }
      
      if (checkSubset(xmoves, win)) {
        let winningLine = win;
        console.log("X WINS");
        displayWinningLine(winningLine);
        addXWin();
      }
  }
  changePlayerTurn();
}

// ---------------------------------------- Check moves against winning combinations

let checkSubset = (movesArray, winsArray) => {
  return winsArray.every((element) => {
      return movesArray.includes(element)
  })
}

// ---------------------------------------- Change player turn

function changePlayerTurn() {
  if (playerTurn == "O") {
      playerTurn = "X";
  } else {
      playerTurn = "O";
  }
  displayPlayerTurn(playerTurn);
}

// ---------------------------------------- Display winning line

function displayWinningLine(line) {
  for (let marker of line) {
    document.getElementById(marker).style.backgroundColor = "gold";
    
  }
}

// ---------------------------------------- Add to winner total

function addOWin() {
  oWins ++;
  document.getElementById("o-wins").innerText = "O wins: " + oWins;
}

function addXWin() {
  xWins ++;
  document.getElementById("x-wins").innerText = "X wins: " + xWins;
}

// ---------------------------------------- Update Win Total Displays

function displayWinTotals() {
  let oTotal = document.getElementById('o-wins');
  oTotal.innerHTML=`O wins : ${oWins} `;
  let xTotal = document.getElementById('x-wins');
  xTotal.innerHTML=`X wins : ${xWins} `;
  }
  




