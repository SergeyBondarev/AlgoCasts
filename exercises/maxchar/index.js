// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const chars = {};
    for (const char of str) {
        chars[char] = chars[char] + 1 || 1;
    }
    let max = 0;
    let answer = null;
    Object.keys(chars).forEach(key => {
       const value = chars[key];
       if (value > max) {
           max = value;
           answer = key;
       }
    });
    return answer;
}

module.exports = maxChar;
