class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */

    //Find the indices that correlate to the values that add up to the TARGET.

    twoSum(nums, target) {
        let hash = {};
        for (let i=0;i<nums.length;i++) {
            let curr = nums[i]
            let result = target - curr;
            
            if (result in hash) {
                return [hash[result], i]
            }
            else {hash[curr] = i}
        }
    }
}