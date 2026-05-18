class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let newa = [];
        for (let i=0;i<2;i++) {
            for (let num of nums) {
                newa.push(num)
            }
        }
        return newa
    }
}
