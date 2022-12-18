// Initialise game variables
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

resetGame();
playerTurn = 1;

/**
 * Resets the game parameters ready for a new game
 */
function resetGame() {
    const omoves = [];
    const xmoves = [];
    }

// --------------- Event listeners -----------------------------
document.addEventListener('DOMContentLoaded', function() {
let squares = document.getElementsByClassName('square');
    for (let square of squares) {
        square.addEventListener("click", function() {
            if (playerTurn == 1) {
                this.textContent = "O";
            } else {
                this.textContent = "X";
            };
            changePlayerTurn();
        });

        square.addEventListener("mouseover", function() {
            this.style.backgroundColor = "pink";
        })

        square.addEventListener("mouseout", function() {
            this.style.backgroundColor = "white";
        })
    };

    let buttons = document.getElementsByTagName('button');
    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "new-game") {
                console.log("New Game"); 
            } else if (this.getAttribute("data-type") === "instructions") {
                console.log("Instructions"); 
            } else if (this.getAttribute("data-type") === "reset") {
                console.log("Reset");
            } else {
                console.log("ERROR");
            };

        }); 
    };   
});


/**
 * Switches the turn from one player to the other
 */
function changePlayerTurn() {
    if (playerTurn == 1) {
        playerTurn = 2;
    } else {
        playerTurn = 1;
    }
}

function checkForWin() {

}



module.exports = resetGame;
