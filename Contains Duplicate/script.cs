public class Solution {
    public bool ContainsDuplicate(int[] nums) {
        var h = new HashSet<int>(nums);
        return h.Count != nums.Length;
    }
}