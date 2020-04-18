// https://www.codewars.com/kata/most-consecutive-0-s-in-a-row-code-golf/train/javascript


// const f = (num) => {
//   const count = [];

//   let counter = 0;

//   [...String(num)].map((x, index, { length }) => {
//     if (x === '0' && index === length - 1) { counter += 1; count.push(counter); } else if (x === '0') { counter += 1; } else { count.push(counter); counter = 0; }
//   });

//   return Math.max(...count);
// };


// function f(number) {
//   const zeros = number.toString().match(/(0+)/g);
//   const lengths = zeros.map(z => z.length);
//   const longest = Math.max(...lengths);
//   return longest;
// }

const f = n => Math.max(...(`${n}`).match(/0+/g).map(z => z.length));

console.log(f(1002000) === 3);
console.log(f(10002030000) === 4);
console.log((f(10) === 1));


// console.log([...String(10002030000)]);
