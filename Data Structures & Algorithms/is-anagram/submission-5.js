class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {return false}
        let sobj = {}
        let tobj = {}

        for (let i=0; i<s.length; i++) {
            sobj[s[i]] = (sobj[s[i]] || 0) + 1;
            tobj[t[i]] = (tobj[t[i]]|| 0) + 1
        }

        for (let key in sobj) {
            if (sobj[key] !== tobj[key]) {return false}
        }
        return true
    }
}