import sum from './src/ship_factory';

test('sum func actually works', () => {
    expect(sum(1, 2)).toBe(3);
});
