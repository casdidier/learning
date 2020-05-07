// https://www.codewars.com/kata/validate-credit-card-number/train/javascript


function validate(n) {
  function resultingDigitsSum(number) {
    return String(number).split('').reduce((acc, num) => {
      acc += parseInt(num);
      return acc;
    }, 0);
  }

  console.log(resultingDigitsSum(n));

  const numberString = String(n).split('').map((x, i) => {
    if (i % 2 === 0) {
      return x * 2;
    }

    return x;
  })
    .map((y) => {
      if (y > 9) {
        return resultingDigitsSum(y);
      }
      return y;
    })
    .reduce((sum, num) => {
      sum += num;
      return sum;
    }, 0);

  console.log(numberString);
  return resultingDigitsSum(numberString) % 10 === 0;
}


function validate(n) {
  let   double = false;
  const digits = n.toString().split('');
  return digits.reduceRight((sum, digit) => {
    digit = Number(digit);
    if (double) {
      digit *= 2;
    }
    double = !double;
    if (digit > 9) {
      digit -= 9;
    }
    sum += digit;
    return sum;
  }, 0) % 10 === 0;
}


console.log(validate(123), false);
console.log(validate(1), false);
console.log(validate(2121), true);
// console.log(validate(1230), true);
