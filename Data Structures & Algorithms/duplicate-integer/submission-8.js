class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */


    // I: Integer array
    // O: boolean value
    // If a value appear MORE than ONCE, return true

    hasDuplicate(nums) {
        let obj = {};
        for (let i=0;i<nums.length;i++) {
            if (!obj[nums[i]]) {obj[nums[i]] = 1}
            else {obj[nums[i]] += 1}
        }
        console.log(obj)
        for (let key in obj) {
            if (obj[key] > 1) {return true}
 
        }
        return false
    }
}
