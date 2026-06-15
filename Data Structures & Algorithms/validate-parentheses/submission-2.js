class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
    let stack = [];

    for (let sym of s) {
        if (sym === '('|| sym === '{'||sym === '[') {
            stack.push(sym)
        }
        else {
            if (!stack.length || (sym === ')' && stack[stack.length - 1] !== '(') ||
                (sym === '}' && stack[stack.length - 1] !== '{') ||
                (sym === ']' && stack[stack.length - 1] !== '[')){
                    return false
                }  
                stack.pop()
            }
    }
    return !stack.length
    }
}
