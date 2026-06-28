class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */

    /*
    I: Array of numbers
    O: Return a boolean
        True: IF values appear more than once
        False: IF values only appear once!!!!!!!
    */

    hasDuplicate(nums) {
        let obj = {};
        for (let i=0;i<nums.length;i++) {
            let results = nums[i];
            if (obj[results]) {obj[results]+=1}
            else {obj[results] = 1}
        }

        for (let key in obj) {
            if (obj[key] > 1) {return true}
        }
        return false
    }
}
