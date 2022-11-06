/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxStr = ''
    let subStr = ''
    for (let i=0; i<s.length; i++) {
        subStr += s[i]
        for (let j=i+1; j<s.length; j++) {
            if (subStr.includes(s[j])) {
                if (subStr.length > maxStr.length) maxStr = subStr
                subStr = ''
                break
            } else subStr += s[j]
        }
        if (subStr.length > maxStr.length) maxStr = subStr
        subStr = ''
    }

    return maxStr.length
};

var lengthOfLongestSubstring = function(s) {
    let sub = new Set()
    let index = 0
    let max = 0
    for (let i=0; i<s.length; i++) {
        while(sub.has(s[i])) {
            sub.delete(s[index])
            index++
        }
        sub.add(s[i])
        max = Math.max(max, sub.size)
    }
    return max
};