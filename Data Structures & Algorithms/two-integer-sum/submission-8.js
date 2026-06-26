class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */

    //Find the indices that correlate to the values that add up to the TARGET.

    twoSum(nums, target) {
 for(let i = 0; i < nums.length; i++) {
            for(let j = i + 1; j < nums.length; j++) {
                if(nums[i] + nums[j] === target) {
                    return [i, j];
                }
            }
        }
    }
}