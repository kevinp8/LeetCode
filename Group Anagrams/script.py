class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        cache = {}
        for i in range(len(strs)):
            key = ''.join(sorted(list(strs[i])))
            if key in cache:
                cache[key].append(strs[i])
            else:
                cache[key] = [strs[i]]
        return cache.values()