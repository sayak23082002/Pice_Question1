const { EMPTY, board } = require('../static');

//Pice placing logic from Pawn Move module
const { isOpponentPiece } = require('./pawnMove');

//Logical moves for a Knight
function isLegalKnightMove(fromRow, fromCol, toRow, toCol, currentPlayer) {
    const dRow = Math.abs(fromRow - toRow);
    const dCol = Math.abs(fromCol - toCol);

    //Checking whether two and half steps are completed or not
    if((dRow === 2 && dCol === 1) || (dRow === 1 && dCol === 2)){
      return board[toRow][toCol] === EMPTY || !isOpponentPiece(board[toRow][toCol], currentPlayer);;
    }
    return false;
}

module.exports = {
    isLegalKnightMove
}