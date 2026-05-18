class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */

// I: array of numbers
// O: Boolean value 
//     if value appears more than once in array = true
//     if value DOESNT appear more than once in array = false

    hasDuplicate(nums) {
        let hash = {};
        for (let i=0; i<nums.length;i++) {
            let curr = nums[i];
            if (curr in hash) {return true}
            else {hash[curr] += 1}
        }
        return false
    }
}
