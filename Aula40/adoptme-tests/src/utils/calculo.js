function soma(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('A e B precisam ser números');
    }
    return a + b;
};

export default soma;