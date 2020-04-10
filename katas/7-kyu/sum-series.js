
function SeriesSum(n) {
    // place to store the overall sum
    let sum = 0;
    // a place to store the current denominator - initialized to 1
    let currentDenominator = 1;
    // iterate up to n
    for (let i = 0; i < n; i++) {
        // add 1 divided by the current demoninator to the sum
        sum += 1 / currentDenominator;
        // increase the denominator by 3
        currentDenominator += 3;
    }

    // return the sum rounded to 2 decimal places
    return sum.toFixed(2);
}



function SeriesSum(n) {
    return Array.from({ length: n }).reduce((sum, _, i) => {
        return sum + (1 / (i * 3 + 1));
    }, 0).toFixed(2);
}


console.log(SeriesSum(1), "1.00");
console.log(SeriesSum(2), "1.25");
// console.log(SeriesSum(3), "1.39");
// console.log(SeriesSum(4), "1.49");