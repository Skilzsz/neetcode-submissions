class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */

    /*
        I: array of strings;
        O: Return the longest COMMON prefix
            If there isnt any return empty string.
    */
    longestCommonPrefix(strs) {
        for (let i = 0; i < strs[0].length; i++) {
            for (let s of strs) {
                if (i === s.length || s[i] !== strs[0][i]) {
                    return s.slice(0, i);
                }
            }
        }
        return strs[0];
    }
}
