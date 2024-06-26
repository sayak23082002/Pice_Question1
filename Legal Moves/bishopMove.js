const { EMPTY, board } = require('../static');

//Pice placing logic from Pawn Move module
const { isOpponentPiece } = require('./pawnMove');

//Logical moves for a Bishop
function isLegalBishopMove(fromRow, fromCol, toRow, toCol, currentPlayer) {

    //Checking whether bishop is moving diagonally or not
    if (Math.abs(fromRow - toRow) !== Math.abs(fromCol - toCol)) {
      return false;
    }
    
    const rowStep = fromRow < toRow ? 1 : -1;
    const colStep = fromCol < toCol ? 1 : -1;

    //Checking if any piece is placed on the rook's path
    for (let row = fromRow + rowStep, col = fromCol + colStep; row !== toRow; row += rowStep, col += colStep) {
      if (board[row][col] !== EMPTY) {
          return false;
        }
      }
      
    //Checking safe to place the pice or not
    return board[toRow][toCol] === EMPTY || !isOpponentPiece(board[toRow][toCol], currentPlayer);
}

module.exports = {
    isLegalBishopMove
}