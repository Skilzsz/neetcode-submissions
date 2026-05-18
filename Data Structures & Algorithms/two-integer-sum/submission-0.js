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
            let value = target - nums[i];

            if (value in hash) {
                return [hash[value], i]
            }
            else {
                hash[curr] = i
            }
        }
        return "IM NOT IN HERE!!!!!"
    }
}
