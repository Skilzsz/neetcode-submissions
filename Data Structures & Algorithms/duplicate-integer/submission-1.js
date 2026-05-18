class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let hash = {};

        for (let i=0;i<nums.length;i++) {
            let results = nums[i];
            if (!hash[results]) {hash[results] = 1}
            else {hash[results] += 1}
        }
        for (let num in hash) {
            if (hash[num] > 1){return true}
        }
        return false
    }
}
