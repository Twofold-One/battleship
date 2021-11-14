const playerContainer = document.getElementById('player-container');
const computerContainer = document.getElementById('computer-container');

const UI = (() => {
    // func which generates the cell according to the status of gamboard
    const generateCell = (status, y, x) =>
        `<div class="cell" data-status="${status}" data-y="${y}" data-x="${x}" $></div>`;
    // fun which generates the grid
    const generateGameboard = (gameboard, player, container) => {
        const gameboard = gameboard.getGameboard();
        let grid = '';
        for (let i = 0; i <= 9; i += 1) {
            for (let j = 0; j <= 9; i += 1) {
                let status = gameboard[i][j];
                if (status === null) {
                    status = '';
                } else if (status.ship) {
                    if (player === 'player') {
                        status = status.ship.id;
                    } else {
                        status = '';
                    }
                }
                grid = generateCell(status, i, j);
            }
        }
        container.insertAdjacentHTML('afeterbegin', grid);
    };

    return {
        generateGameboard,
    };
})();

UI.generateGameboard(playerContainer);

export default UI;
