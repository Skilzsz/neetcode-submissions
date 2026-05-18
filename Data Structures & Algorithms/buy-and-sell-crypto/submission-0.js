class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */

    //Buy at its cheapest, sell at its most expensive! Maximize the profit.

    maxProfit(prices) {
        let buying = prices[0];
        let profit = 0;

        for (let i=0; i<prices.length;i++){
            let curr = prices[i] - buying
            if (buying > prices[i]) {buying = prices[i]}
            if (profit < curr) {profit = curr}
        }        
        return profit
    }
}
