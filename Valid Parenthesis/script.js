/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = []
    let braces = {
        ')': '(',
        ']': '[',
        '}': '{'
    }
    for(let i=0; i<s.length; i++) {
            
        if( !stack.length && (s[i] in braces)) return false

        if(!(s[i] in braces)) {
            stack.push(s[i])
        } else if(s[i] in braces && stack[stack.length-1] === braces[s[i]]) {
            stack.pop()
        } else {
            return false
        }
    }

    return !stack.length
};

