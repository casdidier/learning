/**
 * @param {number[]} nums
 * @return {number}
 */
// Dynamic programming approach
 // speed/time :O(n)/O(1)
const maxSubArray = function (nums) {
  let newsum = nums[0];
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    newsum = Math.max(newsum + nums[i], nums[i]);
    max = Math.max(max, newsum);
  }
  return max;
};
