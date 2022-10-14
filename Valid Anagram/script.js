var isAnagram = function(s, t) {
    let a = {}
    let b= {}
    for (let i=0; i<s.length; i++) {
        if (s[i] in a) a[s[i]]++
        else a[s[i]] = 1

        if (t[i] in b) b[t[i]]++
        else b[t[i]] = 1
    }
    if (s.length === t.length){
        for (let key in a) {
            if (a[key] !== b[key]) return false
        }
        return true
    } else return false
};