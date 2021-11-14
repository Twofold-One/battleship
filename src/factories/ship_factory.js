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

    const hits = Array(size).fill(null);
    const hit = (i) => {
        hits[i] = 'hit';
    };
    const getHits = () => hits;

    const isSunk = () => {
        const isHit = (status) => status === 'hit';
        return getHits().every(isHit);
    };

    return { name, size, hit, getHits, isSunk };
};

export default Ship;
