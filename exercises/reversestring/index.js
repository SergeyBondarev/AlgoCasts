// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

const reverseLoop = (str) => {
    const length = str.length;
    const result = [];
    for (let idx=0; idx < length; idx++) {
        result.push(str[length - idx - 1]);
    }
    return result.join('');
}

const reverseCheat = (str) => {
    return str.split('').reverse().join('');
}

module.exports = { reverseLoop, reverseCheat};
