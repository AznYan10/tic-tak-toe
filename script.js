function gameBoard() {
    document.addEventListener('DOMContentLoaded', function() {
        const board = document.querySelector('.board');
        const cells = [];
        //let currentPlayer = 'X';
        const Player1 = createUser('Player1', 'X');
        const player2 = createUser('Player2', 'O');
    
        // Create cells
        for (let i = 0; i < 9; i++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cells.push(cell);
            // cell.addEventListener('click', () => makeMove(i));
            board.appendChild(cell);
        }
    });
}

function createUser(name, marker) {
    return {
        name: name,
        marker: marker,
        greet: function() {
            console.log(`Hello ${this.name} your marker is ${this.marker}`);
        }
    };
}

const user1 = createUser('player', 'X');
const user2 = createUser('computer', 'O');

user1.greet();
user2.greet();
console.log(user1.name);
console.log(user1.marker);

gameBoard();
