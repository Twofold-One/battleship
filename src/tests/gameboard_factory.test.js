import Gameboard from '../factories/gameboard_factory';
import Ship from '../factories/ship_factory';

describe('gameboard', () => {
    describe('gameboard construction', () => {
        const testGameboard = Gameboard();

        test('gameboard rows length', () => {
            const gameboardLength = testGameboard.getGameboard().length;
            expect(gameboardLength).toBe(10);
        });

        test('gameboard columns length', () => {
            const gameboardLength = testGameboard.getGameboard()[0].length;
            expect(gameboardLength).toBe(10);
        });
    });

    describe('placeShip method', () => {
        describe('place horizontal ship', () => {
            const testGameboard = Gameboard();
            const ship = Ship('carrier');
            testGameboard.placeShip(ship, 0, 0, 'horizontal');
            test('coodrdinates', () => {
                expect(testGameboard.getGameboard()[0][0]).toStrictEqual({
                    index: 0,
                    ship,
                });
                expect(testGameboard.getGameboard()[0][4]).toStrictEqual({
                    index: 4,
                    ship,
                });
            });
        });
        describe('place vertical ship', () => {
            const testGameboard = Gameboard();
            const ship = Ship('carrier');
            testGameboard.placeShip(ship, 0, 0, 'vertical');
            test('coodrdinates', () => {
                expect(testGameboard.getGameboard()[0][0]).toStrictEqual({
                    index: 0,
                    ship,
                });
                expect(testGameboard.getGameboard()[4][0]).toStrictEqual({
                    index: 4,
                    ship,
                });
            });
        });
    });
    describe('recieveAttack method', () => {
        const testGameboard = Gameboard();
        const ship = Ship('carrier');
        testGameboard.placeShip(ship, 0, 0, 'horizontal');
        describe('gameboard status', () => {
            testGameboard.recieveAttack(1, 0);
            testGameboard.recieveAttack(0, 1);
            test('miss', () => {
                expect(testGameboard.getGameboard()[1][0]).toBe('miss');
            });
            test('hit', () => {
                expect(testGameboard.getGameboard()[0][1]).toBe('hit');
            });
        });
        describe('ship status', () => {
            test('being hit', () => {
                expect(ship.getHits()[1]).toBe('hit');
            });
        });
    });
    describe('allShipsAreSunk method', () => {
        test('false', () => {
            const testGameboard = Gameboard();
            const ship = Ship('carrier');
            testGameboard.placeShip(ship, 0, 0, 'horizontal');
            testGameboard.recieveAttack(0, 0);
            testGameboard.recieveAttack(0, 1);
            testGameboard.recieveAttack(0, 2);
            testGameboard.recieveAttack(0, 3);
            expect(testGameboard.allShipsAreSunk()).toBe(false);
        });
        test('true', () => {
            const testGameboard = Gameboard();
            const ship = Ship('carrier');
            testGameboard.placeShip(ship, 0, 0, 'horizontal');
            testGameboard.recieveAttack(0, 0);
            testGameboard.recieveAttack(0, 1);
            testGameboard.recieveAttack(0, 2);
            testGameboard.recieveAttack(0, 3);
            testGameboard.recieveAttack(0, 4);
            expect(testGameboard.allShipsAreSunk()).toBe(true);
        });
    });
});
