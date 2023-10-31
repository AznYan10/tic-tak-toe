function gameBoard() {
    document.addEventListener('DOMContentLoaded', function() {
        const board = document.querySelector('.board');
        const cells = [];

        const player1 = createUser('Player 1', 'X');
        const player2 = createUser('Player 2', 'O');
        let currentPlayer = player1;

        const turns = document.querySelector('#turns'); // To output players turn
        turns.innerHTML = `${currentPlayer.marker} Starts Game!`;

        // Create cells
        for (let i = 0; i < 9; i++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cells.push(cell);
            cell.addEventListener('click', () => makeMove(i));
            board.appendChild(cell);
        }

        function makeMove(index) {
            if (checkWinner(player1.marker) || checkWinner(player2.marker)) {
                return;
            }

            if (cells[index].textContent === '') {
                cells[index].textContent = currentPlayer.marker;
                cells[index].classList.add(currentPlayer.marker);

                if (checkWinner(currentPlayer.marker)) {
                    turns.innerHTML = `Congrats ${currentPlayer.name}, ${currentPlayer.marker} Won!`;
                } else if (checkDraw()) {
                    turns.innerHTML = "It's a draw!"
                } else {
                    currentPlayer = (currentPlayer === player1) ? player2 : player1;
                    turns.innerHTML = `It's ${currentPlayer.marker}'s turn`; // Update the turn message                
                }
            }
        }

        function checkWinner(player) {
            const winPatterns = [
                [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
                [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
                [0, 4, 8], [2, 4, 6] // Diagnols 
            ];
            return winPatterns.some(pattern => pattern.every(index => cells[index].textContent === player));
        }

        function checkDraw() {
            return cells.every(cell => cell.textContent != '');
        }

        function resetBoard() {
            cells.forEach(cell => {
                cell.textContent = '';
                cell.classList.remove('X', 'O');
            });
            currentPlayer = player1;
            turns.innerHTML = `${currentPlayer.marker} Starts Game!`;
        }

        const resetBtn = document.querySelector('#restart');
        resetBtn.addEventListener('click', resetBoard);
    });
}

function createUser(name, marker) {
    return {
        name: name,
        marker: marker,
    };
}

const game = gameBoard();