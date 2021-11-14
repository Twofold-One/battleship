// import Ship from './ship_factory';
// import Gameboard from './gameboard_factory';

const Player = (type) => {
    const getType = () => type;

    const attack = (enemyBoard, y, x) => {
        enemyBoard.recieveAttack(y, x);
    };

    const randomCoordinates = () => {
        const y = Math.floor(Math.random() * 9);
        const x = Math.floor(Math.random() * 9);

        return [x, y];
    };

    const randomAttack = (enemyBoard) => {
        const [y, x] = randomCoordinates();
        const cell = enemyBoard.getGameboard()[y][x];
        if (cell === 'miss' || cell === 'hit') {
            randomAttack(enemyBoard);
        } else {
            enemyBoard.recieveAttack(y, x);
        }
    };

    return {
        getType,
        attack,
        randomAttack,
    };
};

// const testGameboard = Gameboard();
// const ship = Ship('carrier');
// testGameboard.placeShip(ship, 0, 0, 'horizontal');
// const player = Player();
// player.randomAttack(testGameboard);

// console.table(testGameboard.getGameboard());

export default Player;
