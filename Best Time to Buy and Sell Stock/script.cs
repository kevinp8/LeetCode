public class Solution {
    public int MaxProfit(int[] prices) {
        int profit = 0;
        int min = prices[0];
        foreach(var i in prices) {
            if (i < min) min = i;
            else if (i-min > profit) profit = i-min;
        }
        return profit;
    }
}