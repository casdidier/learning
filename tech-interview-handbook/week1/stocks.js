// brute force
// speed/space O(n2)/O(1)

const maxProfit => (prices) {
  let maxprofit = 0;
  for (let i = 0; i < prices.length - 1; i++) { // O(n)
    for (let j = i + 1; j < prices.length; j++) {   // O(n)
      let profit = prices[j] - prices[i];
      if (profit > maxprofit)
        maxprofit = profit;
    }
  }
  return maxprofit;
}



// One pass
// speed/space O(n)/O(1)

const maxProfit (prices) => {
  let minprice = Integer.MAX_VALUE;
  let maxprofit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minprice)
      minprice = prices[i];
    else if (prices[i] - minprice > maxprofit)
      maxprofit = prices[i] - minprice;
  }
  return maxprofit;
}