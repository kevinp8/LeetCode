/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const word = s.toLowerCase().match(/[0-9a-z]/g)?.join('') || ''
    for (let i=0; i< word.length/2; i++) {
        if (word[i] !== word[word.length-1-i]) return false
    }
    return true
};