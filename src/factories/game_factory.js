import Player from './player_factory';
import Gameboard from './gameboard_factory';

const Game = () => {
    const player = Player('player');
    const computer = Player('computer');

    const playerGameboard = Gameboard();
    const computerGameboard = Gameboard();

    // const getPlayerGameboard = () => playerGameboard;
    // const getComputerGameboard = () => computerGameboard;

    return {
        // getPlayerGameboard,
        // getComputerGameboard,
    };
};

export default Game;
