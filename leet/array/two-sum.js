// import measurePerf from '../../utils';

// https://leetcode.com/problems/two-sum/#

const perf = require('execution-time')();

const measurePerf = (fun, args) => {
    perf.start();

    fun(args);

    const results = perf.stop();
    console.log(results.time);  // in milliseconds
}

const benchMark = (arrayFun, args) => {
    for (let i = 0; i < arrayFun.length; i++) {
        measurePerf(arrayFun[i], args);
    }
}

/**
 * Brute Force
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            sum += nums[j];
            if (sum === target) { return ([i, j]) }
            else {
                sum -= nums[j];
            }
        }
        // reset if not found
        sum = 0;
    }

};


/**
 * Two-pass hash Table
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var OnePasstwoSum = function (nums, target) {
    const ref = new Map();
    for (let i = nums; i < nums.length; i++) {
        ref.set(nums[i], i)
    }

    for (let j = 0; j < nums.length; j++) {
        const complement = target - nums[j];
        if (ref.has(complement) && ref.get(complement) !== j) { return [j, ref.get(complement)] }
    }
}

/**
 * Two-pass hash Table
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var TwoPasstwoSum = function (nums, target) {
    const ref = new Map();
    for (let i = nums; i < nums.length; i++) {
        const complement = target - nums[i];
        if (ref.has(complement) && ref.get(complement) !== j) { return [j, ref.get(complement)] }
        ref.set(nums[i], i)
    }
}


// console.log(twoSum([2, 7, 11, 15], 9) === [0, 1]);
// measurePerf(twoSum, ([2, 7, 11, 15], 9));
// measurePerf(OnePasstwoSum, ([2, 7, 11, 15], 9));
// measurePerf(TwoPasstwoSum, ([2, 7, 11, 15], 9));

benchMark([twoSum, OnePasstwoSum, TwoPasstwoSum], ([2, 7, 11, 15], 9));


