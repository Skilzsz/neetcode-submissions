class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        //Create variable labeled profit and asign value of 0;
        let profit = 0;
        //enter a for loop, create variable "buy" with the price at il
        for (let i=0;i<prices.length;i++) {
            let buy = prices[i];
            //enter a for loop, and create "sell" with price at j(i+1)
            for (let j=i+1; j<prices.length;j++) {
                let sell = prices[j];
                //determine profit by 
                profit = Math.max(profit, sell-buy)
            }
        }
        return profit
    }
}
