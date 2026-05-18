class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        const obj = {};
        let highest = 0
        for (let nu of nums) {
            if (!obj[nu]) {
                obj[nu] = 1
            }
            obj[nu] += 1
        }
        let temp = 0
        for (let s in obj) {
            if (obj[s] > temp){
                temp = obj[s];
                highest = s
            }
        }
        return highest
    }
}
