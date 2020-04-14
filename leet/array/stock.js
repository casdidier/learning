import { benchmark } from '../../utils';


/** brute force
 * @param {number[]} prices
 * @return {number}
 */
const maxProfitBruceForce = function (prices) {
  let profit = 0;

  for (let i = 0; i < prices.length; i++) {
    for (let j = i; j < prices.length; j++) {
      const operation = prices[j] - prices[i];
      // console.log(operation);
      if (operation > profit) { profit = operation; }
    }
  }
  return profit;
};


/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  let profit   = 0;
  let minPrice = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) { minPrice = prices[i]; } else if (prices[i] - minPrice > profit) { profit = prices[i] - minPrice; }
  }
  return profit;
};

const arr = [7, 1, 5, 3, 6, 4];

// Input: [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
//              Not 7-1 = 6, as selling price needs to be larger than buying price.

console.log(maxProfitBruceForce(arr));
benchmark([maxProfitBruceForce, maxProfit], arr);
