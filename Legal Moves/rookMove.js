const { EMPTY, board } = require('../static');

//Pice placing logic from Pawn Move module
const { isOpponentPiece } = require('./pawnMove');

//Logical moves for a Rook
function isLegalRookMove(fromRow, fromCol, toRow, toCol, currentPlayer) {

    //Checking whether rook is moving column wise or row wise
    if (fromRow !== toRow && fromCol !== toCol) {
        return false;
    }
    
    //Checking if any piece is placed on the rook's path

    //Row wise movement
    if (fromRow === toRow) {
        const step = fromCol < toCol ? 1 : -1;
        for (let col = fromCol + step; col !== toCol; col += step) {
            if (board[fromRow][col] !== EMPTY) {
                return false;
            }
        }

        //Column wise movement
    } else {
        const step = fromRow < toRow ? 1 : -1;
        for (let row = fromRow + step; row !== toRow; row += step) {
            if (board[row][fromCol] !== EMPTY) {
                return false;
            }
        }
    }
    
    //Checking safe to place the pice or not
    return board[toRow][toCol] === EMPTY || !isOpponentPiece(board[toRow][toCol], currentPlayer);
  }

  module.exports = {
        isLegalRookMove
  }
