var longestConsecutive = function(nums) {
    if(nums.length) {
        let max = 1
        let current = 1
        const arr = nums.sort((a, b) => a-b)
        for (let i=1; i<arr.length; i++) {
            if (arr[i] === arr[i-1] + 1) current++
            else if (arr[i] === arr[i-1]) continue
            else {
                max = Math.max(max, current)
                current = 1
            }
        }
        max = Math.max(max, current)
        return max
    } else return 0
};