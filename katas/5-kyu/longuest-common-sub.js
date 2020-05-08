// https://www.codewars.com/kata/longest-common-subsequence/train/javascript

function LCS(x, y) {
  const sortStrArr = str => str.split('').sort((a, b) => a - b);

  // order the strings
  const xSorted = sortStrArr(x);
  const ySorted = sortStrArr(y);

  let longuestCommonSub = '';

  const shortestArr = xSorted.length > ySorted.length ? ySorted : xSorted;
  const longuestArr = xSorted.length > ySorted.length ? xSorted : ySorted;

  // slicing the value of the shortest one , one char at a time
  for (let i = 0; i < shortestArr.length + 1; i++) {
    const element = shortestArr.slice(0, i).join('');
    if (longuestArr.join('').includes(element)) {
      longuestCommonSub = element;
    }
  }

  return longuestCommonSub;
}


// console.log(LCS('a', 'b'), '');
// console.log(LCS('abcdef', 'abc'), 'abc');
// console.log(LCS('abc', 'abcdef'), 'abc');
console.log(LCS('abcdef', 'acf'), 'acf');
// console.log(LCS('132535365', '123456789'), '12356');
