class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */

    //I: array of numbers
    //O: boolean value
    hasDuplicate(nums) {
        let obj = {};
        for (let i=0;i<nums.length;i++){
            if (!obj[nums[i]]) {obj[nums[i]] = 1}
            else {obj[nums[i]]+= 1}
        }
        console.log(obj)
        for (let values of Object.values(obj)){
            if (values >= 2) {return true}
        }
        return false
    }
}
