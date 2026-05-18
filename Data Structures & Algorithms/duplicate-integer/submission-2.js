class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let hash = {};

        for (let i=0;i<nums.length;i++) {
            let results = nums[i];
            if (results in hash) {return true}
            else {hash[results] += 1}
        }
        return false
    }
}
