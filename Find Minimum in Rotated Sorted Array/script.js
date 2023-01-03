/**
 * @param {number[]} nums
 * @return {number}
 */
optimized solution(log(n)):
var findMin = function(nums) {
    let start = 0
    let end = nums.length-1
    let min = nums[0]

    while(start < end){
        let middle = Math.floor((start + end)/2)
        min = Math.min(min, nums[middle])

        if (nums[middle] > nums[end]) start = middle+1
        else end = middle-1
    }
    return Math.min(min, nums[start])
};



Linear time:
var findMin = function(nums) {
    let min = nums[0]
    for (let i=0; i<nums.length; i++) {
        if (nums[i] < min) {
            min = nums[i]
            break
        }
    }
    return min
};