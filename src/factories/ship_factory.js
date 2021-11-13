const Ship = (name) => {
    let size;

    switch (name) {
        case 'carrier':
            size = 5;
            break;
        case 'battleship':
            size = 4;
            break;
        case 'destroyer':
            size = 3;
            break;
        case 'submarine':
            size = 3;
            break;
        case 'patrol boat':
            size = 2;
            break;
        default:
            size = 0;
            break;
    }

    // const getName = () => name;
    // const getLength = () => size;

    const hits = Array(size).fill(null);
    const hit = (i) => {
        hits[i] = 'hit';
    };
    const getHits = () => hits;

    const isSunk = () => {
        const isHit = (position) => position === 'hit';
        return getHits().every(isHit);
    };

    return { name, size, hit, getHits, isSunk };
};

const carrier = Ship('carrier', 5);

export default Ship;

// function sum(a, b) {
//     return a + b;
// }

// export default sum;
