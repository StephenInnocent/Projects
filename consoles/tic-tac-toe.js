const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
];

let currentPlayer = 'X';

function printBoard() {
    console.log(board.map(row => row.join('|')).join('\n-----\n'));
}

function checkWinner() {
    // Check rows, columns, and diagonals for a win
    for (let i = 0; i < 3; i++) {
        if (board[i][0] === currentPlayer && board[i][1] === currentPlayer && board[i][2] === currentPlayer) {
            return true;
        }
        if (board[0][i] === currentPlayer && board[1][i] === currentPlayer && board[2][i] === currentPlayer) {
            return true;
        }
    }
    if (
        (board[0][0] === currentPlayer && board[1][1] === currentPlayer && board[2][2] === currentPlayer) ||
        (board[0][2] === currentPlayer && board[1][1] === currentPlayer && board[2][0] === currentPlayer)
    ) {
        return true;
    }
    return false;
}

function playTurn() {
    printBoard();
    rl.question(`Player ${currentPlayer}, enter row and column (e.g., 1 2): `, (input) => {
        const [row, col] = input.split(' ').map(num => parseInt(num) - 1);

        if (board[row][col] === ' ') {
            board[row][col] = currentPlayer;
            if (checkWinner()) {
                printBoard();
                console.log(`Player ${currentPlayer} wins!`);
                rl.close();
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                playTurn();
            }
        } else {
            console.log('Invalid move. Try again.');
            playTurn();
        }
    });
}

console.log('Welcome to Tic-Tac-Toe!');
playTurn();
