/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) { //O(n^2)
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

optimized:

var twoSum = function(nums, target) { //O(n)
    let dict = {}
    for (let i=0; i<nums.length; i++) {
        if (target - nums[i] in dict) {
            return [dict[target-nums[i]], i]
        }
        dict[nums[i]] = i
    }
};