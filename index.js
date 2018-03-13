function flip() {
    return Math.random() >= 0.5;
}

// Returns a number between [0, n)
function randomNumber(n) {

    if( n == 1 ){
        return 0;
    } else if( n < 1 || n > 999999 ) {
        throw new Error('n must be greater than 0 AND n must be less than 1,000,000');
    } else {
        const randBytes = n.toString(2).split('').map(() => flip() ? '1' : '0').join('');
        let randInt = parseInt(randBytes, 2);

        if (randInt >= n) {
            randInt = randomNumber(n);
        }

        return randInt
    }
}

console.log(
    '\ngenerate rand Number with seed: 50: ', randomNumber(500),
    '\ngenerate rand Number with seed: 1: ', randomNumber(1),
    '\ngenerate rand Number with seed: 50: ', randomNumber(500),
    '\ngenerate rand Number with seed: 999999: ', randomNumber(999999)
);