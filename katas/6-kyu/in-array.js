// https://www.codewars.com/kata/550554fd08b86f84fe000a58/train/javascript
/* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */

/* basic solution */
// function inArray(array1, array2) {
//   const arr = [];

//   for (let i = 0; i < array1.length; i++) {
//     const element = array1[i];
//     for (let j = 0; j < array2.length; j++) {
//       if (array2[j].includes(element)) arr.push(element);
//     }
//   }
//   return [...new Set(arr)];
// }


// function inArray(array1,array2){
//   // a place to store the results
//   const results = [];
//   // iterate over array2
//   array2.forEach(word => {
//     // iterate over array1
//     array1.forEach(ending => {
//       // if the current word ends with something in array1
//       if (word.includes(ending)) {
//         // push into results
//         results.push(ending);
//       }
//     })
//   });

//   return [...new Set(results)].sort();
// }


function inArray(array1, array2) {
  return array1.filter((ending) => {
    return array2.some(word => word.includes(ending));
  }).sort();
}


const a2 = ['lively', 'alive', 'harp', 'sharp', 'armstrong'];

const a1 = ['xyz', 'live', 'strong'];
console.log(inArray(a1, a2), ['live', 'strong']);
const a3 = ['live', 'strong', 'arp'];
console.log(inArray(a3, a2), ['arp', 'live', 'strong']);
const a4 = ['tarp', 'mice', 'bull'];
console.log(inArray(a4, a2), []);
