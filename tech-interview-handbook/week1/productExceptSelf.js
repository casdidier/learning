/**
 * @param {number[]} nums
 * @return {number[]}
 */
// space/time O(n)/ O(n2)

// Runtime: 4800 ms
// Memory Usage: 43.2 MB
// const productExceptSelf = function (nums) {
//   return nums.map((num, index) => {
//     return nums.reduce((cum, curr, idx) => {
//       if (idx !== index) {
//         return cum *= curr;
//       }
//       return cum;
//     }, 1);
//   });
// };


// 104 ms	45 MB
const productExceptSelf = function (nums) {
  const product = nums.reduce((cum, curr) => (cum *= curr), 1);
  const arr = Array(nums.length).fill(product);


  // handle the cases with zero
  if (nums.filter(x => x === 0).length >= 2) return Array(nums.length).fill(0);
  if (nums.filter(x => x === 0).length === 1) {
    const idxZero = nums.indexOf(0);
    const productWithoutZero = nums.reduce((cum, curr, idx) => {
      if (idx === idxZero) return cum;
      return cum * curr;
    }, 1);

    const res = Array(nums.length).fill(0);
    res[idxZero] = productWithoutZero;
    return res;
  }

  return arr.map((num, index) => {
    return num / nums[index];
  });
};
