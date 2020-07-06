// https://leetcode.com/problems/missing-number/

/**
 * @param {number[]} nums
 * @return {number}
 */
// const missingNumber = function (nums) {
//   const sortedNums = nums.sort((a, b) => a - b);
//   const max = Math.max(...nums);
//   const min = Math.min(...nums);
//   let missingNumber = min;

//   if (nums.length === 1 && nums[0] === 1) return 0;

//   if (nums.length === 1 && nums[0] === 0) return 1;


//   for (let i = 0; i < sortedNums.length; i++) {
//     if (missingNumber !== sortedNums[i]) { return missingNumber; }
//     missingNumber++;
//   }
//   return missingNumber;
// };


const missingNumber = function (nums) {
  let sum = 0;
  let expectedSum = 0;
  let n = 1; // will be tracking all the natural numbers, 1..|nums| (excluding 0)
  for (const num of nums) {
    sum += num;
    expectedSum += n++;
  }

  // missing
  return expectedSum - sum;
};

console.log(missingNumber([3, 0, 1]) === 2);
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]) === 8);
