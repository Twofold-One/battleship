const Gameboard = (name) => {
    // first index is row, second is column
    const gameboard = Array(10)
        .fill(null)
        .map(() => Array(10).fill(null));
    const getGameboard = () => gameboard;
    // function which calls ship factory function
    const placeShips = () => {};
    // function takes pair of coordinates,
    // determines whether or not the attack hit a ship
    // and then sends the ‘hit’ function to the correct ship,
    // or records the coordinates of the missed shot.
    const recieveAttack = (coordinates) => {};
    // Gameboards should keep track of missed attacks so they can display them properly.
    const trackAttak = () => {};
    // Gameboards should be able to report whether or not all of their ships have been sunk
    const allShipsAreSunk = () => {};

    return { getGameboard };
};

console.table(Gameboard('player').getGameboard());

export default Gameboard;
