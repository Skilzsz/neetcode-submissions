class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */

    //I: array of numbers
    //O: boolean value

    /*
    I: array of integers
    O: Return a boolean (Return true if the value returns more
    than once in the array).

    Could use a hashmap. 

    */
    hasDuplicate(nums) {
        //create an object
        let obj = {};
        //iterate through the array to determine if there is duplicates. 
        for (let i=0;i<nums.length;i++) {
            let pick = nums[i];
            if (obj[pick]) {obj[pick] += 1}
            else {obj[pick] = 1}
        }

        for (let key in obj) {
            if (obj[key] > 1) {return true}
        }
        return false
        //use a for in loop to see if the value is greater than 1.

        //return true if more than one, return false is ONLY one
    }
}