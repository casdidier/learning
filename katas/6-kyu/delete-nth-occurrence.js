// https://www.codewars.com/kata/delete-occurrences-of-an-element-if-it-occurs-more-than-n-times/train/javascript

// const deleteNth = (arr, n) => {
//   const counter = {};

//   const arrCounter = arr.map((x) => {
//     return counter[x] ? counter[x] += 1 : counter[x] = 1;
//   });

//   return arr.map((x, i) => {
//     return arrCounter[i] <= n ? x : null;
//   })
//     .filter(x => x !== null);
// };

// function deleteNth(arr, n) {
//   const counts = {};
//   const result = [];

//   arr.forEach((currentNumber) => {
//     if (!counts[currentNumber] || counts[currentNumber] < n) {
//       result.push(currentNumber);
//       counts[currentNumber] = counts[currentNumber] || 0;
//       counts[currentNumber]++;
//     }
//   });

//   return result;
// }

// react way
function deleteNth(arr, n) {
  return arr.reduce((state, currentNumber) => {
    if (!state.counts[currentNumber] || state.counts[currentNumber] < n) {
      state.counts[currentNumber] = (state.counts[currentNumber] || 0) + 1;
      state.result.push(currentNumber);
    }
    return state;
  }, {
    counts: {},
    result: [],
  }).result;
}

// correction
// function deleteNth(arr, x) {
//   var cache = {};
//   return arr.filter(function (n) {
//     cache[n] = (cache[n] || 0) + 1;
//     return cache[n] <= x;
//   });
// }


console.log(deleteNth([20, 37, 20, 21], 1), [20, 37, 21]);
console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3), [1, 1, 3, 3, 7, 2, 2, 2]);

export default deleteNth;
