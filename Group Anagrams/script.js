/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let dict = {}
    let words = [...strs].sort()
    for (let i=0; i<words.length; i++) {
        let word = words[i].split('').sort().join('')
        if (word in dict) dict[word].push(words[i])
        else dict[word] = [words[i]]
    }
    return Object.values(dict).sort((a, b) => a.length-b.length)
};