/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let indexes = []
    for (let i=0; i<nums.length; i++) {
        for (let j=0; j<nums.length; j++) {
            if (i != j) {
                if (nums[i] + nums[j] === target) {
                    indexes.push(i)
                    indexes.push(j)
                    break
                }
            }
        }
        if (indexes.length > 0) break
    }
    return indexes
}