
        const board = document.getElementById('board');
        const status = document.getElementById('status');
        let currentPlayer = 'X';
        let gameActive = true;
        let gameState = Array(9).fill(null);

        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        function checkWinner() {
            for (const combination of winningCombinations) {
                const [a, b, c] = combination;
                if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
                    drawWinningLine(combination);
                    return gameState[a];
                }
            }
            return gameState.includes(null) ? null : 'Draw';
        }

        function drawWinningLine(combination) {
            const [start, middle, end] = combination;
            const startCell = document.querySelector(`.cell[data-index='${start}']`);
            const endCell = document.querySelector(`.cell[data-index='${end}']`);
            const line = document.createElement('div');
            line.classList.add('winning-line');
            board.appendChild(line);

            const startRect = startCell.getBoundingClientRect();
            const endRect = endCell.getBoundingClientRect();

            const deltaX = endRect.left - startRect.left;
            const deltaY = endRect.top - startRect.top;
            const length = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

            const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            line.style.width = `${length}px`;
            line.style.transform = `translate(${startRect.left - board.offsetLeft + 50}px, ${startRect.top - board.offsetTop + 50}px) rotate(${angle}deg)`;
        }

        function handleCellClick(e) {
            const cellIndex = e.target.dataset.index;

            if (gameState[cellIndex] || !gameActive) return;

            gameState[cellIndex] = currentPlayer;
            e.target.textContent = currentPlayer;
            e.target.classList.add('taken');

            const winner = checkWinner();

            if (winner) {
                gameActive = false;
                status.textContent = winner === 'Draw' ? "It's a draw!" : `Player ${winner} wins!`;
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                status.textContent = `Player ${currentPlayer}'s turn`;
            }
        }

        function createBoard() {
            board.innerHTML = '';
            gameState.forEach((_, index) => {
                const cell = document.createElement('div');
                cell.classList.add('cell');
                cell.dataset.index = index;
                cell.addEventListener('click', handleCellClick);
                board.appendChild(cell);
            });
        }

        function restartGame() {
            gameState = Array(9).fill(null);
            currentPlayer = 'X';
            gameActive = true;
            status.textContent = "Player X's turn";
            createBoard();
        }

        createBoard();
