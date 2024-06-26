const { EMPTY, board } = require('../static');

//Checking whether the destination box is available to place move
function isOpponentPiece(piece, currentPlayer) {
    return (currentPlayer === 'White' && piece === piece.toLowerCase()) || (currentPlayer === 'Black' && piece === piece.toUpperCase());
}

//Logical moves for a Pawn
function isLegalPawnMove(fromRow, fromCol, toRow, toCol, player) {
    const direction = player === 'White' ? -1 : 1;
    const startRow = player === 'White' ? 6 : 1;

    // Move forward
    if (fromCol === toCol) {
        if (board[toRow][toCol] === EMPTY) {
            if (fromRow === startRow && fromRow + 2 * direction === toRow) {
                return true;
            }
            if (fromRow + direction === toRow) {
                return true;
            }
        }else{
            return false;
        }
    }
    // Capture another piece
    if (Math.abs(fromCol - toCol) === 1 && fromRow + direction === toRow && !isOpponentPiece(board[toRow][toCol], player)) {
        return true;
    }
    
    return false;
  }

  module.exports = {
    isLegalPawnMove,
    isOpponentPiece
  }