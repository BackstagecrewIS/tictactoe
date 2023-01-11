// ---------------------------------------- Initialise variables

// ------- All possible winning combinations -------
const wins = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7]
];

let oWins = 0; // Count of player O wins
let xWins = 0; // Count of player X wins
let gamesPlayed = 0; // Count of all games played
let omoves = []; // Define empty player O moves array
let xmoves = []; // Define empty player X moves array
let playedMoves = []; // Define empty moves array
let gameOver = false; // End of game check
let playerTurn = "O"; // Set the player O to begin the first game
let playedSquare;

// ---------------------------------------- Start Game

document.addEventListener('DOMContentLoaded', function () {
  displayPlayerTurn(playerTurn);
  initialiseListeners();
  
// ---------------------------------------- Button listeners

  let buttons = document.getElementsByClassName('control');
  for (let button of buttons) {
    button.addEventListener("click", function () {
        if (this.getAttribute("data-type") === "new-game") {
            newGame();
        } else if (this.getAttribute("data-type") === "instructions") {
            $('#modal').modal('show');
        } else if (this.getAttribute("data-type") === "reset") {
            resetScores();
        }
    });
  }

})

// ---------------------------------------- New Game

function newGame() {
  clearBoard();
  emptyArrays();
  addGameCounter();
  gameOver = false;
  if (gamesPlayed % 2 == 0) {
      playerTurn = "X";
  } else {
      playerTurn = "O";
  }
  displayPlayerTurn(playerTurn);
  initialiseListeners();
}

// ---------------------------------------- Clear board

function clearBoard() {
  let squares = document.getElementsByClassName('square');
  for (let square of squares) {
      square.backgroundColor = "white";
      square.color = "black";
      square.innerHTML = "";
      square.style.color = "black";
      square.style.fontWeight = "400";
  }
}

// ---------------------------------------- Empty move arrays

function emptyArrays() {
  omoves.length = 0;
  xmoves.length = 0;
  playedMoves.length = 0;
}

// ---------------------------------------- Increment game counter

function addGameCounter() {
  gamesPlayed++;
}

// ---------------------------------------- Display player turn

function displayPlayerTurn(player) {
  let moveDisplay = document.getElementById('playerToPlay');
  if (!gameOver) {
      moveDisplay.innerHTML = `${player} to play`;
  }

}

// ----------------------------------------- Initialise Listeners

function initialiseListeners() {
  let squares = document.getElementsByClassName('square');
  for (let square of squares) {
      square.addEventListener("click", function () {
          playedSquare = parseInt(square.id);
          if (playerTurn == "O") {
              if (checkMove(playedSquare)) {
                  this.textContent = "O";
                  omoves.push(playedSquare);
                  checkForWin();
              }
          } else {
              if (checkMove(playedSquare)) {
                  this.textContent = "X";
                  xmoves.push(playedSquare);
                  checkForWin();
              }
          }
      });

// ---------------------------------------- Highlight cursor 

      square.addEventListener("mouseover", function () {
          this.style.backgroundColor = "pink";
      })
      square.addEventListener("mouseout", function () {
          this.style.backgroundColor = "white";
      })
  }
}

// ----------------------------------------- Remove Listeners

function removeListeners() {
  let squares = document.getElementsByClassName('square');
  for (let square of squares) {
      square.removeEventListener("click", function () {})

      // ---------------------------------------- Remove  Cursor Highlight

      square.addEventListener("mouseover", function () {
          this.style.backgroundColor = "white";
      })
      square.addEventListener("mouseout", function () {
          this.style.backgroundColor = "white";
      })
  }
}

// ---------------------------------------- Check for valid move

function checkMove(move) {
  if (!playedMoves.includes(move) && !gameOver) {
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
          displayWinningLine(winningLine);
          addOWin();
          gameOver = true;
          gameEnd("O wins");
      }
      if (checkSubset(xmoves, win)) {
          let winningLine = win;
          displayWinningLine(winningLine);
          addXWin();
          gameOver = true;
          gameEnd("X wins");
      }
  }
  checkForDraw();
  changePlayerTurn();
}

// ---------------------------------------- Check for Draw
function checkForDraw() {
  if (!gameOver && playedMoves.length == 9) {
      gameOver = true;
      gameEnd("It's a draw");
  }
}

// ---------------------------------------- Check moves against winning combinations
// Original code for function checkSubset() derived from https://dev.to/smpnjn/javascript-check-if-an-array-is-a-subset-of-another-array-950

function checkSubset(movesArray, winsArray) {
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
      document.getElementById(marker).style.color = "red";
      document.getElementById(marker).style.fontWeight = "700";
  }
}

// ---------------------------------------- Add to winner total

function addOWin() {
  oWins++;
  document.getElementById("o-wins").innerText = "O wins: " + oWins;
}

function addXWin() {
  xWins++;
  document.getElementById("x-wins").innerText = "X wins: " + xWins;
}

// ---------------------------------------- Update Win Total Displays

function displayWinTotals() {
  let oTotal = document.getElementById('o-wins');
  oTotal.innerHTML = `O wins : ${oWins} `;
  let xTotal = document.getElementById('x-wins');
  xTotal.innerHTML = `X wins : ${xWins} `;
}

// ---------------------------------------- Game end messages

function gameEnd(result) {
  let message = document.getElementById('playerToPlay');
  removeListeners();
  message.innerHTML = result;
}

function resetScores() {
  xWins = 0;
  oWins = 0;
  displayWinTotals();
}
