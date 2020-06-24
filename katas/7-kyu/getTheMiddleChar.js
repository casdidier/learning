// https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript

function getMiddle(s) {
  const sArray = [...s];
  const len = sArray.length;
  if (len % 2 === 0) {
    return [sArray[len / 2 - 1], sArray[len / 2]].join('');
  }

  return sArray[Math.round(len / 2) - 1];
}

console.log(getMiddle('test'), 'es');
console.log(getMiddle('testing'), 't');
console.log(getMiddle('middle'), 'dd');
console.log(getMiddle('A'), 'A');
