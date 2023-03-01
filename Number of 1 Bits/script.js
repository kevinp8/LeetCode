/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    return n.toString(2).split('').reduce((init, i) => i === '1' ? init+1 : init, 0)
};