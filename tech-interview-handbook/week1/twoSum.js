// https://leetcode.com/problems/two-sum

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// BRUTE FORCE
// time/speed O(1)/O(n2)
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] == target - nums[i]) {
        return [i, j];
      }
    }
  }
};

// Two-Pass Hash Table , space traded to get speed
// time/space O(n)/O(n)
var twoSum = function (nums, target) {
  // O(1) time , O(n) space
  const numsMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    numsMap.set(nums[i], i);
  }


  for (let i = 0; i < nums.length; i++) {
    O(n);
    const complement = target - nums[i];
    if (numsMap.has(complement) && numsMap.get(complement) != i) { // O(n) => O(1)
      return [i, numsMap.get(complement)];
    }
  }
};

// One-pass Hash Table
// time/space O(n)/O(n) (1 pass)
var twoSum = function (nums, target) {
  // O(1) time , O(n) space
  const numsMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numsMap.has(complement) && numsMap.get(complement) != i) { // O(n) => O(1)
      return [i, numsMap.get(complement)];
    }
    numsMap.set(nums[i], i);
  }
};
