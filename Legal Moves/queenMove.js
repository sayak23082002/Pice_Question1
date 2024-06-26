const { isLegalRookMove } = require('./rookMove');

//Pice placing logic from Pawn Move module
const { isLegalBishopMove } = require('./bishopMove');

//Queen's move is mixture of a Rook's and a Bishop's moves
function isLegalQueenMove(fromRow, fromCol, toRow, toCol, currentPlayer) {
    return isLegalRookMove(fromRow, fromCol, toRow, toCol, currentPlayer) || isLegalBishopMove(fromRow, fromCol, toRow, toCol, currentPlayer);
}

module.exports = {
    isLegalQueenMove
}