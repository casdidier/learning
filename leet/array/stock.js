/**brute force
 * @param {number[]} prices
 * @return {number}
 */
var maxProfitBruceForce = function (prices) {
    let profit = 0;

    for (let i = 0; i < prices.length; i++) {
        for (let j = i; j < prices.length; j++) {
            let operation = prices[j] - prices[i];
            // console.log(operation);
            if (operation > profit) { profit = operation };
        }
    }
    return profit;
};


/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let profit   = 0;
    let minPrice = 0;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) { minPrice = prices[i]; }
        else if (prices[i] - minPrice > profit)
            profit = prices[i] - minPrice;
    }
    return profit;
};




const perf = require('execution-time')();

const measurePerf = (fun, args) => {
    perf.start();

    fun(args);

    const results = perf.stop();
    console.log(`${results.time}`);  // in milliseconds
}

const benchMark = (arrayFun, args) => {
    for (let i = 0; i < arrayFun.length; i++) {
        measurePerf(arrayFun[i], args);
    }
}


const arr = [7, 1, 5, 3, 6, 4];

// Input: [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
//              Not 7-1 = 6, as selling price needs to be larger than buying price.

console.log(maxProfitBruceForce(arr));
benchMark([maxProfitBruceForce, maxProfit], arr);