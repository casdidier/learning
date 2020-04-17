// const sequenceSum = (begin, end, step) => {
//   // May the Force be with you
//   if (begin > end) return 0;
//   let sum = 0;
//   for (let i = begin; i < end + 1; i += step) {
//     sum += i;
//   }

//   return sum;
// };

function sequenceSum(begin, end, step) {
  const length = Math.floor((end - begin) / step) + 1;
  return Array
    .from({ length }, (_, i) => begin + (step * i))
    .reduce((sum, val) => sum + val, 0);
}


console.log(sequenceSum(2, 6, 2) === 12);
console.log(sequenceSum(1, 5, 1) === 15);
console.log(sequenceSum(1, 5, 3) === 5);
