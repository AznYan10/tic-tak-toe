function gameBoard() {
    document.addEventListener('DOMContentLoaded', function() {
        const board = document.querySelector('.board');
        const cells = [];
        //let currentPlayer = 'X';
        const player1 = createUser('Player1', 'X');
        const player2 = createUser('Player2', 'O');
        let currentPlayer = player1;
    
        // Create cells
        for (let i = 0; i < 9; i++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cells.push(cell);
            cell.addEventListener('click', () => makeMove(i));
            board.appendChild(cell);
        }

        function makeMove(index) {
            if (cells[index].textContent === '') {
                cells[index].textContent = currentPlayer.marker;
                if (checkWinner(currentPlayer.marker)) {
                    alert(`${currentPlayer.name} wins!`);
                } else if (checkDraw()) {
                    alert("It's a draw");
                } else {
                    currentPlayer = (currentPlayer === player1) ? player2 : player1;
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
            cells.forEach(cell => cell.textContent = '');
            // currentPlayer = player1;
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