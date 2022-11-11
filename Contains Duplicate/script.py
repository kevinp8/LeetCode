class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        stuff = set()
        for i in nums:
            if i in stuff:
                return True
            stuff.add(i)
        return False


class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        stuff = set(nums)
        return len(nums) != len(stuff)
