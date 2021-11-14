import Player from '../factories/player_factory';
import Gameboard from '../factories/gameboard_factory';
import Ship from '../factories/ship_factory';

describe('Player', () => {
    describe('attack method', () => {
        const testGameboard = Gameboard();
        const ship = Ship('carrier');
        testGameboard.placeShip(ship, 0, 0, 'horizontal');
        const player = Player();
        player.attack(testGameboard, 0, 0);
        test('0|0 is hit', () => {
            expect(testGameboard.getGameboard()[0][0]).toBe('hit');
        });
    });
    describe('randomAttack method', () => {
        const testGameboard = Gameboard();
        const ship = Ship('carrier');
        testGameboard.placeShip(ship, 0, 0, 'horizontal');
        const player = Player();
        player.randomAttack(testGameboard);
        test('random hit', () => {
            expect(
                testGameboard.getGameboard().every((cell) => cell === null)
            ).toBe(false);
        });
    });
});
