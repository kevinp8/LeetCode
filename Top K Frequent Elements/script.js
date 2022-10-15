var topKFrequent = function(nums, k) {
    let count = {}
    for (let i=0; i< nums.length; i++) {
        if (nums[i] in count) count[nums[i]]++
        else count[nums[i]] = 1
    }
    count = Object.keys(count).sort((a,b) => count[b] - count[a])
    return count.slice(0, k)
};