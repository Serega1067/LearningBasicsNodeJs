function exponentiation(n, e) {
    let result = n;

    if (e === 0) {
        return 1;
    }

    for (let i = 1; i < e; i++) {
        result *= n;
    }
    return result;
}

module.exports = { exponentiation };