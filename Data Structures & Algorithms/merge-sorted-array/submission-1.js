class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */

    //nums1 = total length of m+n
    // m number of elemnts in nums1
    // n number of elements in nums2

    //O: nums1 with all the values placed at index of "m"

    merge(nums1, m, nums2, n) {
        //last index of num1
        let last = m + n - 1;
        //last index of m
        // last index of n
        let i = m - 1,
            j = n - 1;

        while (j >= 0) {
            if (i >= 0 && nums1[i] > nums2[j]) {
                nums1[last--] = nums1[i--];
            } else {
                nums1[last--] = nums2[j--];
            }
        }
    }
}
