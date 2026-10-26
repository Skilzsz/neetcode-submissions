class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
if (s.length !== t.length) {return false}
        
        let sO = {};
        let tO = {};

        for (let i=0;i<s.length;i++) {
            let curr = s[i];
            sO[curr] = (sO[curr]|| 0) + 1
            tO[[t[i]]] = (tO[t[i]]|| 0) + 1
        }
        for (let key in sO) {
            if (sO[key] !== tO[key]) {return false }
        }
        return true 
    }
}
