// https://www.codewars.com/kata/one-line-task-square-every-digit/train/javascript

// const sd = (num) => {
//   return parseInt([...String(num)].map(x => Math.pow(x, 2)).join(''), 0);
// };

// const sd = num => parseInt([...String(num)].map(x => Math.pow(x, 2)).join(''), 0);


const sd = num => +[...`${num}`].map(x => x * x).join('');


// const sd = x => +[...`${x}`].map(v => v * v).join``;

console.log(sd(0), 0);
console.log(sd(1111), 1111);
console.log(sd(3212), 9414);
console.log(sd(2112), 4114);
console.log(sd(159), 12581);
console.log(sd(77455754), 4949162525492516);
console.log(sd(99999999), 8181818181818181);
