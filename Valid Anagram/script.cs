public class Solution {
    public bool IsAnagram(string s, string t) {
        if (s.Length != t.Length) return false;

        var one = new Dictionary<char, int>();
        var two = new Dictionary<char, int>();
        for (int i=0; i<s.Length; i++) {
            if (one.ContainsKey(s[i])) one[s[i]]++;
            else one[s[i]] = 1;

            if (two.ContainsKey(t[i])) two[t[i]]++;
            else two[t[i]] = 1;
        }
        foreach(KeyValuePair<char, int> entry in one) {
            try {
                if (one[entry.Key] != two[entry.Key]) return false;
            } catch {
                return false;
            }
            
        }
        return true;
    }
}