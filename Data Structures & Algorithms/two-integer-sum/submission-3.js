class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */


    // I: array of integers + target integer (Value integers should add up to)
    // O: array of the indexes that add up to the target

    twoSum(nums, target) {
        let result = 0;

        for (let i=0;i<nums.length;i++) {
            let remainder = target - nums[i];
            for (let j=i+1;j<nums.length;j++) {
                if (remainder === nums[j]) {return [i,j]}
            }
        }
        return "Does Not EXIST!"
    }
}
