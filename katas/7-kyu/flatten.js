// https://www.codewars.com/kata/flatten-1/train/javascript

// const flatten = function (array) {
//   // TODO: Program me
//   res = [];
//   array.forEach((element) => {
//     if (element instanceof Array) {
//       flatten(element);
//     } else {
//       res.push(element);
//     }
//   });
//   return res;
// };


// const flatten = (array) => {
//   return array.reduce((acc, val) => acc.concat(val), []);
// };

function* flatten(array, depth) {
  if (depth === undefined) {
    depth = 1;
  }
  for (const item of array) {
    if (Array.isArray(item) && depth > 0) {
      yield* flatten(item, depth - 1);
    } else {
      yield item;
    }
  }
}

const arr = [1, 2, [3, 4, [5, 6]]];
const flattened = [...flatten(arr, Infinity)];
// [1, 2, 3, 4, 5, 6]

const flatten = (arr, d = 1) => {
  return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val, d - 1) : val), [])
    : arr.slice();
};

console.log(flatten([]), []);
console.log(flatten([1, 2, 3]), [1, 2, 3]);
console.log(flatten([[1, 2, 3], ['a', 'b', 'c'], [1, 2, 3]]), [1, 2, 3, 'a', 'b', 'c', 1, 2, 3]);
console.log(flatten([[3, 4, 5], [[9, 9, 9]], ['a,b,c']]), [3, 4, 5, [9, 9, 9], 'a,b,c']);
// console.log(flatten([[[3], [4], [5]], [9], [9], [8], [[1, 2, 3]]]), [[3], [4], [5], 9, 9, 8, [1, 2, 3]]);
