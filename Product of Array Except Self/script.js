/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let prods = []

    let temp = 1
    for (let i=0; i<nums.length; i++) {
        prods[i] = temp
        temp *= nums[i]
    }

    temp = 1
    for (let i=nums.length-1; i>=0; i--) {
        prods[i] *= temp
        temp *= nums[i]
    }

    return prods
};