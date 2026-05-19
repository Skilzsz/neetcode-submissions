class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let buy = prices[0]
        let profit = 0;

        for (let i=0;i<prices.length;i++) {
            let curr = prices[i] - buy;
            if (buy > prices[i]) {buy = prices[i]}
            if (profit < curr) {profit = curr}
        }
        return profit
    }
}

