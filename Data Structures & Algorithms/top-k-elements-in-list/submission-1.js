class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
    let hash = {};

    // Step 1: Frequency map
    for (let num of nums) {
        hash[num] = (hash[num] || 0) + 1;
    }

    // Step 2: Sort keys by frequency
    let sorted = Object.keys(hash).sort((a, b) => hash[b] - hash[a]);

    // Step 3: Return top k elements (convert string keys to numbers)
    return sorted.slice(0, k).map(Number);
};
}
