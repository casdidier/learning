// https://www.codewars.com/kata/the-highest-profit-wins/train/javascript

// function minMax(arr) {
//   const min = Math.min(...arr);
//   const max = Math.max(...arr);


//   return [min, max]; // fix me!
// }

function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}

// fast
function minMax(arr) {
  var a = arr.sort(function (a, b) { return a - b });
  return [a[0], a[a.length - 1]];
}


console.log(minMax([1, 2, 3, 4, 5]), [1, 5]);
console.log(minMax([2334454, 5]), [5, 2334454]);
console.log(minMax([1]), [1, 1]);
