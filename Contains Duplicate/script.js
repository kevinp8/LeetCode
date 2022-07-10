/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    return nums.some(i => nums.indexOf(i) != nums.lastIndexOf(i))
};