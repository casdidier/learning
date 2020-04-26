// https://www.codewars.com/kata/ip-validation/train/javascript

function isValidIP(str) {
  const ipFormat = str.split('.');

  if (ipFormat.length !== 4) return false;

  // below 255
  const isBelow255 = arr => (arr.every(x => Number(x) <= 255));
  // is number
  const isNuneric = arr => (arr.every(x => typeof Number(x) === 'number'));
  // positive number
  const isPositive = arr => (arr.every(x => Number(x) >= 0));

  // start number is 0,1,2
  const isCorrectStartNumber = arr => (arr.every(x => x.split('').length === 3 && [0, 1, 2].includes(!!Number(x.split('')[0]))));


  // includes spaces
  const containsSpace = arr => (arr.some(x => x.includes(' ') === true));

  if (!isBelow255(ipFormat)) { return false; }
  if (!isNuneric(ipFormat)) { return false; }
  if (containsSpace(ipFormat)) { return false; }
  if (!isPositive(ipFormat)) { return false; }
  if (!isCorrectStartNumber(ipFormat)) { return false; }


  return true;
}


console.log(isValidIP('0.0.0.0') === true);
console.log(isValidIP('12.255.56.1') === true);
console.log(isValidIP('137.255.156.100') === true);
console.log(isValidIP('') === false);
console.log(isValidIP('abc.def.ghi.jkl') === false);
console.log(isValidIP('123.456.789.0') === false);
console.log(isValidIP('12.34.56') === false);
console.log(isValidIP('01.02.03.04') === false);
console.log(isValidIP('256.1.2.3') === false);
console.log(isValidIP('1.2.3.4.5') === false);
console.log(isValidIP('123===45===67===89') === false);
// console.log(isValidIP('1e0.1e1.1e2.2e2') === false);
// console.log(isValidIP(' 1.2.3.4') === false);
console.log(isValidIP('1.2.3.4 ') === false);
console.log(isValidIP('12.34.56.-7') === false);
console.log(isValidIP('1.2.3.4\n') === false);
console.log(isValidIP('\n1.2.3.4') === false);
