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