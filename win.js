const { EMPTY, board } = require('./static');

//To decide which player wins
function decideColor(piece, currentPlayer) {
    return  currentPlayer === 'Black' ? piece === piece.toUpperCase() : piece === piece.toLowerCase();
}

//To check whether all the pices of other player is replaced or not
function checkWin(currentPlayer){

    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[0].length; j++) {
        if (board[i][j] !== EMPTY && decideColor(board[i][j], currentPlayer)){
          return false;
        }
      }
    }

    return true;
}

module.exports = {
    checkWin
}