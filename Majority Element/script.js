/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let bums = nums.sort()
    return bums[Math.floor(nums.length/2)]
};