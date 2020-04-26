// https://www.codewars.com/kata/regex-validate-pin-code/train/javascript

// function validatePIN(pin) {
//   if (pin.length < 4 || pin.length > 6 || pin.length === 5) return false;

//   return [...pin].every(d => typeof Number(d) === 'number');
// }

function validatePIN(pin) {
  const is4Digits = /^\d\d\d\d$/.test(pin);
  const is6Digits = /^\d\d\d\d\d\d$/.test(pin);
  return is4Digits || is6Digits;
}


console.log(validatePIN('1234') === true);
console.log(validatePIN('12345') === false);
console.log(validatePIN('a234') === false);
