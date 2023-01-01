/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(heights) {
    let max = 0
    let left = 0
    let right = heights.length-1
    while (left < right){
        max = Math.max(max, (heights[left] < heights[right] ? heights[left] : heights[right]) * (right-left))
        if (heights[left] < heights[right]) left++
        else right--
    }
    return max
};