class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */


    // I: array of integers + target integer (Value integers should add up to)
    // O: array of the indexes that add up to the target

    twoSum(nums, target) {
        let obj = {};  

        for (let i=0;i<nums.length;i++){
            let curr = nums[i];
            let result = target - nums[i];
            if (result in obj) {
                return [obj[result], i]
            }
            else {
                obj[curr] = i
            }
        }
    }
}
