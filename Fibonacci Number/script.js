/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    let nums = [0, 1]
    for (let i=2; i<=n; i++){
        nums.push(nums[i-1] + nums[i-2])
    }
    return nums[n]
};