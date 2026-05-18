class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */

    // I: Two strings. 
    // O: Return boolean
    //     If the 2 strings are anagrams of each other (return true)
    isAnagram(s, t) {
        if (s.length !== t.length) { return false}

        let objS = {};
        let objT = {};

        for (let i=0;i<s.length;i++){
            objS[s[i]] = (objS[s[i]] || 0) + 1
            objT[t[i]] = (objT[t[i]] || 0) + 1
        }

        for (const key in objS) {
            if (objS[key] !== objT[key]) {
                return false
            }
        }
        return true
    }
}
