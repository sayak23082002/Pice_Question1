const { EMPTY, board } = require('./static')
const { displayBoard } = require('./display');
const { checkWin } = require('./win');
const { isLegalMove } = require('./checkLegalMove');

//Input reader module from CLI
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//Initial Player
let currentPlayer = 'White';

//Input move logic
function makeMove(move) {

    //Input formatting
    const [from, to] = move.split(' ');
    const fromCol = from.charCodeAt(0) - 'A'.charCodeAt(0);
    const fromRow = 8 - parseInt(from[1]);
    const toCol = to.charCodeAt(0) - 'A'.charCodeAt(0);
    const toRow = 8 - parseInt(to[1]);
    
    //Changing turn and also validating moves
    if (isLegalMove(move, currentPlayer)) {
      const piece = board[fromRow][fromCol];
      board[fromRow][fromCol] = EMPTY;
      board[toRow][toCol] = piece;
      currentPlayer = currentPlayer === 'White' ? 'Black' : 'White';
    } else {
      console.log('Illegal move. Try again.');
    }
}

//CLI to take input from user
function promptMove() {
    rl.question(`${currentPlayer}'s move (e.g., A2 A3), 'quit' to end or 'display' to see moves: `, (input) => {
        try{

            //For quiting the game
            if (input === 'quit') {
                console.log(`${currentPlayer === 'White' ? 'Black' : 'White'} wins!`);
                rl.close();
                return;
            }
    
            //To check the winner
            if(checkWin(currentPlayer)){
                console.log(`${currentPlayer} wins, All ${currentPlayer}'s pices are removed!`);
                rl.close();
                return;
            }
            
            //Displaying board
            if (input.toLowerCase() === 'display') {
                displayBoard();
            } else {
                makeMove(input);
            }
            
        }catch(e) {
            console.error("Give Input Correctly")
        }
        promptMove();
    });
}

function startGame() {
    displayBoard();
    promptMove();
}

//Starting the application
startGame();