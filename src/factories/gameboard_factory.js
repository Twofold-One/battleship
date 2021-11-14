// import Ship from './ship_factory';

const Gameboard = () => {
    // first index is row (y), second is column (x)
    const gameboard = Array(10)
        .fill(null)
        .map(() => Array(10).fill(null));
    const getGameboard = () => gameboard;
    const placedShips = [];

    const placeShip = (ship, y, x, orientation) => {
        if (orientation === 'horizontal') {
            for (let i = 0; i < ship.size; i += 1) {
                gameboard[y][x + i] = {
                    ship,
                    index: i,
                };
            }
        } else {
            for (let i = 0; i < ship.size; i += 1) {
                gameboard[y + i][x] = {
                    ship,
                    index: i,
                };
            }
        }
        placedShips.push(ship);
    };

    const recieveAttack = (y, x) => {
        if (gameboard[y][x] === null) {
            gameboard[y][x] = 'miss';
        } else if (gameboard[y][x].ship) {
            gameboard[y][x].ship.hit(gameboard[y][x].index);
            gameboard[y][x] = 'hit';
        }
    };

    const allShipsAreSunk = () => placedShips.every((ship) => ship.isSunk());

    return { getGameboard, placeShip, recieveAttack, allShipsAreSunk };
};

export default Gameboard;
