class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let obj = {};

        for (let i=0;i<nums.length;i++) {
            let curr = nums[i]
            if (!obj[curr]) {
                obj[curr] = 1
            }
            else {obj[curr]+=1}
        }
        for (let key in obj) {
            if (obj[key]>= 2) {return true}
        }
        return false
    }
}
