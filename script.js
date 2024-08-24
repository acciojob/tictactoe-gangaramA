//your JS code here. If required.
document.getElementById('submit').addEventListener('click', function() {
    let player1 = document.getElementById('player-1').value;
    let player2 = document.getElementById('player-2').value;

    if (player1 && player2) {
        document.getElementById('name-inputs').style.display = 'none';
        document.getElementById('game').style.display = 'block';

        let currentPlayer = player1;
        let messageDiv = document.querySelector('.message');
        messageDiv.textContent = `${currentPlayer}, you're up`;

        const boardCells = document.querySelectorAll('.cell');
        let moves = 0;

        boardCells.forEach(cell => {
            cell.addEventListener('click', function() {
                if (!cell.textContent && !checkWinner()) {
                    cell.textContent = currentPlayer === player1 ? 'X' : 'O';
                    moves++;
                    if (checkWinner()) {
                        messageDiv.textContent = `${currentPlayer}, congratulations you won!`;
                    } else if (moves === 9) {
                        messageDiv.textContent = 'It\'s a tie!';
                    } else {
                        currentPlayer = currentPlayer === player1 ? player2 : player1;
                        messageDiv.textContent = `${currentPlayer}, you're up`;
                    }
                }
            });
        });

        function checkWinner() {
            const winningCombinations = [
                [1, 2, 3], [4, 5, 6], [7, 8, 9],
                [1, 4, 7], [2, 5, 8], [3, 6, 9],
                [1, 5, 9], [3, 5, 7]
            ];

            return winningCombinations.some(combination => {
                return combination.every(index => {
                    const cell = document.getElementById(index.toString());
                    return cell.textContent === (currentPlayer === player1 ? 'X' : 'O');
                });
            });
        }
    }
});

