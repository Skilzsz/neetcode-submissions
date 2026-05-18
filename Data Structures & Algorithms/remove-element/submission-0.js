class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let temp = []
        for (let num of nums){
            if (num !== val) {
                temp.push(num)
            }
        }
        for (let j=0;j < temp.length; j++) {
            nums[j] = temp[j]
            console.log(nums)
        }
        return temp.length
    }
}
