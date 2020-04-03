// https://www.codewars.com/kata/56b22765e1007b79f2000079


// basic
// function narcissistic(value) {
//     const length = Math.floor(Math.log10(Math.abs(value))) + 1;
//     console.log(length);

//     let sum    = 0;
//     let digits = value;

//     while (digits > 0) {
//         const digit   = digits % 10;
//               sum    += Math.pow(digit, length);
//               digits  = Math.floor(digits / 10);
//     }

//     return sum == value;
// }

// more compact
// function narcissistic(value) {
// 	return value.toString().split('').reduce((sum, digit, i, {length}) => {
// 		return sum + Math.pow(digit, length);
// 	}, 0) == value
// }


// even more compact
function narcissistic(value) {
	return [...value.toString()].reduce((sum, digit, i, {length}) => {
		return sum + Math.pow(digit, length);
	}, 0) == value
}




console.log(narcissistic(7), 'this number is narcissistic')
console.log(narcissistic(153), 'this number is narcissistic')
console.log(narcissistic(1634), 'this number is narcissistic')
console.log(narcissistic(371), 'this number is narcissistic')
console.log(narcissistic(14), 'this number is not narcissistic')