/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let words = {}
    for (let i=0; i<strs.length; i++) {
        let code = strs[i].split('').sort()
        if (code in words) words[code].push(strs[i])
        else words[code] = [strs[i]]
    }
    return Object.values(words)
};