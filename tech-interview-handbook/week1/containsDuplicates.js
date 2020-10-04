/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  let numsTable = {};
  for (let i=0; i < nums.length; i++){
      if (numsTable[nums[i]]) {return true}
      else {numsTable[nums[i]] = 1}
  }
  return false
  
};