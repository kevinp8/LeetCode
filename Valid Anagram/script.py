class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        
        one, two = {}, {}
        for i in range(len(s)):
            if s[i] in one:
                one[s[i]] += 1
            else:
                one[s[i]] = 1

            if t[i] in two:
                two[t[i]] += 1
            else:
                two[t[i]] = 1
        return one == two


class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        
        one, two = {}, {}
        for i in range(len(s)):
            one[s[i]] = 1 + one.get(s[i], 0)
            two[t[i]] = 1 + two.get(t[i], 0)
        return one == two