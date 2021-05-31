// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseIntWithString(n) {
    const reversed = Math.abs(n)
        .toString()
        .split('')
        .reverse()
        .join('');
    return Math.sign(n) * parseInt(reversed);
}

function reverseInt(n) {
    let absoluteValue = Math.abs(n);
    let reversedValue = 0;
    while (absoluteValue > 0) {
        const lastDigit = absoluteValue % 10;
        reversedValue = 10*reversedValue + lastDigit;
        absoluteValue = Math.floor(absoluteValue / 10);
    }
    return Math.sign(n) * reversedValue;
}

module.exports = { reverseInt, reverseIntWithString };
