// https://www.codewars.com/kata/remove-the-minimum/train/javascript

// function removeSmallest(numbers) {
//   const min = Math.min(...numbers);

//   const index = numbers.findIndex(x => x === min);

//   const newNumbers = numbers.slice();
//   newNumbers.splice(index, 1);
//   return newNumbers;
// }

// immutable
// function removeSmallest(numbers) {
//   let indexOfMin = numbers.indexOf(Math.min(...numbers));
//   return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
// }


// function removeSmallest(numbers) {
//   let min = Infinity, index
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] < min) min = numbers[index = i]
//   }

//   return numbers.slice(0, index).concat(numbers.slice(index + 1))
// }


// reduce
function removeSmallest(numbers) {
  if (numbers.length === 0) return [];
  const smallestIndex = numbers
    .reduce((smallestIndex, currentValue, i) => {
      const smallestValue = numbers[smallestIndex];
      if (currentValue < smallestValue) {
        smallestIndex = i;
      }
      return smallestIndex;
    }, 0);
  return numbers.filter((_, i) => i !== smallestIndex);
}


//


console.log(removeSmallest([1, 2, 3, 4, 5]) === [2, 3, 4, 5]);
console.log(removeSmallest([5, 3, 2, 1, 4]) === [5, 3, 2, 4]);
console.log(removeSmallest([2, 2, 1, 2, 1]) === [2, 2, 2, 1]);
