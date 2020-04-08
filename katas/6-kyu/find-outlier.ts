// function findOutlier(integers) {
//     let arrOdd  = [];
//     let arrEven = [];

//     integers.forEach(num => {
//         if (num % 2 == 0) {
//             arrEven.push(num);
//         }
//         else {
//             arrOdd.push(num);
//         }
//     })

//     return arrOdd.length == 1 ? arrOdd[0]: arrEven[0];
// }

// function findOutlier(integers) {
//     const {odds, evens} = integers.reduce(({odds, evens}, currentValue) => {
//       if (currentValue % 2 === 0) {
//         evens.push(currentValue);
//       } else {
//         odds.push(currentValue);
//       }

//       return {
//         odds,
//         evens
//       };
//     }, {
//       odds: [],
//       evens: []
//     });

//     return odds.length === 1 ? odds[0] : evens[0];
//   }

//   function findOutlier(integers) {
//     const evens = integers.filter(i => i % 2 === 0);
//     const odds = integers.filter(i => i % 2 !== 0);
//     return odds.length === 1 ? odds[0] : evens[0];
//   }

function findOutlier(integers: Array<number>) {
  let even = 0;
  let odd  = 0;
  let res: number;

  integers.forEach((num: number, i: number) => {
    if (num % 2 == 0) {
      even++;
      if (i >= 1 && even == 1) {
        res = num;
      }
    } else {
      odd++;
      if (i >= 1 && odd == 1) {
        res = num;
      }
    }
  });

  return res;
}

console.log(findOutlier([0, 1, 2]), 1);
console.log(findOutlier([1, 2, 3]), 2);
console.log(findOutlier([2, 6, 8, 10, 3]), 3);
console.log(findOutlier([0, 0, 3, 0, 0]), 3);
console.log(findOutlier([1, 1, 0, 1, 1]), 0);
