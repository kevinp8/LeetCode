/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let count = {}
    let left = 0
    let maxFreq = 0
    let longest = 0
    for (let right=0; right<s.length; right++){
        if (count[s[right]]) count[s[right]]++
        else count[s[right]] = 1
        
        maxFreq = Math.max(maxFreq, count[s[right]])

        if ((right-left + 1 - maxFreq) > k){
            count[s[left]]--
            left++
        }
        
        longest = Math.max(longest, right - left + 1)
    }
    return longest
};