// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    for (let i = 0; i < str.length/2 + 1; i++) {
        if (str[i] !== str[str.length - i - 1]) {
            return false;
        }
    }
    return true;
}

function palindromeNaive(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}

function palindromeArrayHelper(str) {
    return str.split('').every((char, idx) => char === str[str.length - idx - 1]);
}

module.exports = { palindrome, palindromeNaive, palindromeArrayHelper };
