class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let newa = [], i=0,j=0;
        while (i < word1.length || j < word2.length){
            if (i < word1.length) {newa.push(word1[i++])}
            if (j < word2.length) {newa.push(word2[j++])}
        }
        return newa.join("")
    }
}