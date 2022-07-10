/**
 * @param {number[]} nums
 * @return {number[]}
 */

var productExceptSelf = function(nums) {
    let newNums = []
    for (let i=0; i<nums.length; i++) {
        let product = 1
        for (let j=0; j<nums.length; j++) {
            if (j != i) product *= nums[j]
        }
        newNums.push(product)
    }
    return newNums
};

