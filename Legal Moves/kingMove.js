const { EMPTY, board } = require('../static');

//Pice placing logic from Pawn Move module
const { isOpponentPiece } = require('./pawnMove');

//King has no power for this case so moves one place accordingly
function isLegalKingMove(fromRow, fromCol, toRow, toCol, currentPlayer) {
    return Math.abs(fromRow - toRow) <= 1 && Math.abs(fromCol - toCol) <= 1 && board[toRow][toCol] === EMPTY || !isOpponentPiece(board[toRow][toCol], currentPlayer);
}

module.exports = {
    isLegalKingMove
}