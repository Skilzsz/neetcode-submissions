class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let hash = {};

        for (let i=0;i<nums.length;i++) {
            let curr = nums[i];
            let result = target - nums[i];

            if (result in hash) {
                return [hash[result], i]
            }
            else {
                hash[curr] = i
            }
        }
    }
}