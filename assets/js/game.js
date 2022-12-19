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

omoves = [];
xmoves = [];

resetGame();
playerTurn = 1;

/**
 * Resets the game parameters ready for a new game
 */
function resetGame() {
    omoves = [];
    xmoves = [];
    }

// --------------- Event listeners -----------------------------
document.addEventListener('DOMContentLoaded', function() {
let squares = document.getElementsByClassName('square');
    for (let square of squares) {
        square.addEventListener("click", function() {
            if (playerTurn == 1) {
                this.textContent = "O";
                omoves.push(square.id*1);
                console.log(square.id*1);
                console.log(omoves);
            } else {
                this.textContent = "X";
                xmoves.push(square.id*1);
                console.log(square.id*1);
                console.log(xmoves);
            };
            checkForWin();
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
                showInstructions(); 
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
    for (let win of wins) {
        if (checkSubset(omoves, win)) {
            console.log("O WINS");
        }
        
        if (checkSubset(xmoves, win)) {
            console.log("X WINS");
        }
    }
    changePlayerTurn();
}


let checkSubset = (movesArray, winsArray) => {
    return winsArray.every((element) => {
        return movesArray.includes(element)
    })
}

 

function showInstructions() {
    alert("POP UP INSTRUCTIONS");
}


module.exports = resetGame;
