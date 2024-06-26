//Importing all the modules
const { EMPTY, board } = require('./static');
const { isLegalPawnMove } = require('./Legal Moves/pawnMove');
const { isLegalRookMove } = require('./Legal Moves/rookMove');
const { isLegalKnightMove } = require('./Legal Moves/knightMove');
const { isLegalBishopMove } = require('./Legal Moves/bishopMove');
const { isLegalQueenMove } = require('./Legal Moves/queenMove');
const { isLegalKingMove } = require('./Legal Moves/kingMove');


//Checking the given input move is valid according to rules or not 
function isLegalMove(move, currentPlayer) {
    const [from, to] = move.split(' ');
    const fromCol = from.charCodeAt(0) - 'A'.charCodeAt(0);
    const fromRow = 8 - parseInt(from[1]);
    const toCol = to.charCodeAt(0) - 'A'.charCodeAt(0);
    const toRow = 8 - parseInt(to[1]);

    const piece = board[fromRow][fromCol];

    //Check if the place is empty and if the place is holding the piece according to the player
    if (piece === EMPTY && (currentPlayer === 'White' && piece === piece.toLowerCase()) && (currentPlayer === 'Black' && piece === piece.toUpperCase())) {
        return false;
    }

    //Check if target position is not empty and if the target position contains a piece of the same player who's turn in active
    switch (piece.toUpperCase()) {
        case 'P':
            return isLegalPawnMove(fromRow, fromCol, toRow, toCol, currentPlayer);
        case 'R':
            return isLegalRookMove(fromRow, fromCol, toRow, toCol, currentPlayer);
        case 'N':
            return isLegalKnightMove(fromRow, fromCol, toRow, toCol, currentPlayer);
        case 'B':
            return isLegalBishopMove(fromRow, fromCol, toRow, toCol, currentPlayer);
        case 'Q':
            return isLegalQueenMove(fromRow, fromCol, toRow, toCol, currentPlayer);
        case 'K':
            return isLegalKingMove(fromRow, fromCol, toRow, toCol, currentPlayer);
        default:
            return false;
    }

}

module.exports = {
    isLegalMove
}