class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */

// I: array of integers
// O: Return boolean
//     if a value appear MORE than once
//     Else, return flase if the only appears once. 
// possible approach: use hashmap to keep a count of how mant each appear. 

    hasDuplicate(nums) {
        let obj = {};
        for (let key of nums) {
            if (!obj[key]) {obj[key] = 1}
            else {
                return true
            }
        }
        return false
    }
}
