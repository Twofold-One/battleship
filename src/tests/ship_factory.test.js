import Ship from '../factories/ship_factory';

describe('Ship factory --> properties', () => {
    const carrier = Ship('carrier');
    test('name', () => {
        expect(carrier.name).toBe('carrier');
    });
    test('size', () => {
        expect(carrier.size).toBe(5);
    });
});

describe('Ship factory --> hit methods', () => {
    const carrier = Ship('carrier');
    test('initial hits', () => {
        expect(carrier.getHits()).toStrictEqual([null, null, null, null, null]);
    });
    test('hit 0 position', () => {
        carrier.hit(0);
        expect(carrier.getHits()).toStrictEqual([
            'hit',
            null,
            null,
            null,
            null,
        ]);
    });
    test('hit all positions', () => {
        carrier.hit(0);
        carrier.hit(1);
        carrier.hit(2);
        carrier.hit(3);
        carrier.hit(4);
        expect(carrier.getHits()).toStrictEqual([
            'hit',
            'hit',
            'hit',
            'hit',
            'hit',
        ]);
    });
});

describe('Ship factory --> isSunk method', () => {
    const carrier = Ship('carrier');
    test('initial hits', () => {
        expect(carrier.isSunk()).toBe(false);
    });
    test('all hits', () => {
        carrier.hit(0);
        carrier.hit(1);
        carrier.hit(2);
        carrier.hit(3);
        carrier.hit(4);
        expect(carrier.isSunk()).toBe(true);
    });
});

// test('sum func actually works', () => {
//     expect(sum(1, 2)).toBe(3);
// });
