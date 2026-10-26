class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res = {};
        for (let s of strs) {
            //this will assort the letters in each word from A-Z
            const sortedS = s.split('').sort().join('');
            //if the hashmap KEY does NOT contain the letters, return 
            //Key Value pair of an empty array at those letters,
            //then push word into object array. 
            if (!res[sortedS]) {
                res[sortedS] = [];
            }
            res[sortedS].push(s);
        }
        //returns ONLY the values of the hashmap.
        return Object.values(res);

    }
}


