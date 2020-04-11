// https://www.codewars.com/kata/memoized-fibonacci

const perf = require('execution-time')();

const cache = {};
function fibonacci(n) {

    if (cache[n]) return cache[n];

    if (n == 0 || n == 1) {
        return n;
    }
    const n1     = fibonacci(n - 1);
    cache[n - 1] = n1;
    const n2     = fibonacci(n - 2);
    cache[n - 2] = n2;
    return n1 + n2;
}


perf.start();
// console.log(fibonacci(70), 190392490709135);
// console.log(fibonacci(60), 1548008755920);
console.log(fibonacci(50), 12586269025);


const results = perf.stop();
console.log(results.time);  // in milliseconds