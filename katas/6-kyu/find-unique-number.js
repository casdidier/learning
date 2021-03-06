// https://www.codewars.com/kata/find-the-unique-number-1/train/javascript

// function findUniq(arr) {
//   const counter = {};

//   arr.map((x) => {
//     if (!counter[x]) { counter[x] = 1; } else {
//       counter[x] += 1;
//     }
//   });

//   for (const key in counter) {
//     if (counter[key] === 1) {
//       return Number(key);
//     }
//   }
// }

function findUniq(arr) {
  const uniq = {};
  let result;
  arr.forEach((item) => {
    uniq[item] = (uniq[item] || 0) + 1;
  });
  Object.keys(uniq).forEach((key) => {
    if (uniq[key] === 1) {
      result = key;
    }
  });

  return parseFloat(result);
}

// more functionnal
// function findUniq(arr) {
//   return +arr.filter((value) => { return arr.indexOf(value) == arr.lastIndexOf(value); });
// }

console.log(findUniq([0, 1, 0]), 1);
console.log(findUniq([1, 1, 1, 2, 1, 1]), 2);
console.log(findUniq([3, 10, 3, 3, 3]), 10);
