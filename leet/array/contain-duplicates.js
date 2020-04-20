// https://leetcode.com/problems/contains-duplicate/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
// complexity O ( n log n ) > O ( n )

const containsDuplicate = (nums) => {
  nums.sort();

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) return true;
  }

  return false;
};


// O (n * n )
// const containsDuplicate = (nums) => {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < i; j++) {
//       if (nums[j] === nums[i]) return true;
//     }
//   }
//   return false;
// };

export default containsDuplicate;
