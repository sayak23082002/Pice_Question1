const { board } = require('./static');

//To display the chess board
function displayBoard() {
    console.log('  | A B C D E F G H');
    console.log('__|_________________');
    board.forEach((row, i) => {
      console.log((8 - i) + ' | ' + row.join(' '));
    });
}

module.exports = {
    displayBoard
}