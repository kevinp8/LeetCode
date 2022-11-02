var topKFrequent = function(nums, k) {
    let counts = {}
    for (let i=0; i<nums.length; i++) {
        if (nums[i] in counts) counts[nums[i]]++
        else counts[nums[i]] = 1
    }
    return Object.keys(counts).sort((a, b) => counts[b]-counts[a]).slice(0, k)
};