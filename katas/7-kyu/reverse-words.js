// https://www.codewars.com/kata/reverse-words/train/javascript


function reverseWords(str) {
  return str.split(' ').reduce((txt, word) => `${txt} ${word.split('').reverse().join('')}`, '').trim();
}


console.log(reverseWords('The quick brown fox jumps over the lazy dog.')); // , 'ehT kciuq nworb xof spmuj revo eht yzal .god');
console.log(reverseWords('apple'), 'elppa');
console.log(reverseWords('a b c d'), 'a b c d');
console.log(reverseWords('double  spaced  words'), 'elbuod  decaps  sdrow');
