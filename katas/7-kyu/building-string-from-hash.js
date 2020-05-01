// https://www.codewars.com/kata/building-strings-from-a-hash/train/javascript

// function solution(pairs) {
//   const pairsArray = Object.entries(pairs).reduce((string, pair, i) => {
//     string += `${pair[0]} = ${pair[1]}`;
//     if (i !== pairs.length - 1) {
//       string += ',';
//     }
//     return string;
//   }, '');

//   return pairsArray;
// }


// function solution(pairs) {
//   return Object.keys(pairs)
//     .reduce((result, key, i, keys) => {
//       result += `${key} = ${pairs[key]}`;
//       if (i !== keys.length - 1) {
//         result += ',';
//       }
//       return result;
//     }, '');
// }

// destructuring
const solution = pairs => Object.entries(pairs)
  .map(([key, value]) => `${key} = ${value}`)
  .join(',');

// immutable
function soluction(x) {
  return Object.keys(x)
    .reduce((y, z) => [...y, `${z} = ${x[z]}`], []).join(',');
}

console.log(solution({ a: 1, b: '2' }), 'a = 1,b = 2'); // should return "a = 1,b = 2"
