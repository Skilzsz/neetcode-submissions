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
         for (let i=0;i<nums.length;i++) {
            let result = nums[i]
            if (!obj[result]) {
                obj[result] = 1
            }
            if (obj[result]> 1) {return true}
            else {
                obj[result] += 1
            }
         }
         return false
    }
}
