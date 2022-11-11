public class Solution {
    public int[] ProductExceptSelf(int[] nums) {
        var prods = new int[nums.Length];

        int temp = 1;
        for (int i=0; i<nums.Length; i++) {
            prods[i] = temp;
            temp *= nums[i];
        }

        temp = 1;
        for (int i=nums.Length-1; i>=0; i--) {
            prods[i] *= temp;
            temp *= nums[i];
        }
        return prods;
    }
}