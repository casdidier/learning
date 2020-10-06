/**
 * @param {number[]} nums
 * @return {number}
 */
// speed O(n)

const maxProduct = (nums) => {
  const max = [];
  const min = [];

  max[0] = min[0] = nums[0];
  let result = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > 0) {
      max[i] = Math.max(nums[i], max[i - 1] * nums[i]);
      min[i] = Math.min(nums[i], min[i - 1] * nums[i]);
    } else {
      max[i] = Math.max(nums[i], min[i - 1] * nums[i]);
      min[i] = Math.min(nums[i], max[i - 1] * nums[i]);
    }

    result = Math.max(result, max[i]);
  }

  return result;
};
