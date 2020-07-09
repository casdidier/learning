
const sortThings = (a, b) => {
  a = a.toLowerCase();
  b = b.toLowerCase();

  if (a > b) {
    return 1;
  } if (a < b) {
    return -1;
  } if (a === b) {
    return 0;
  }
};


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function (s, t) {
  // verify same number of letters
  if (s.length !== t.length) return false;

  // verify same number of each letter
  const newOrderedWords = [];
  [s, t].forEach(word => newOrderedWords.push(word.split('').sort(sortThings).join('')));

  // put in the same order the two words
  for (let i = 0; i < newOrderedWords.length - 1; i++) {
    const element1 = newOrderedWords[i];
    const element2 = newOrderedWords[i + 1];
    for (let j = 0; j < newOrderedWords.length - 1; j++) {
      const letter1 = element1[j];
      const letter2 = element2[j];
      if (letter1 !== letter2) return false;
    }
  }
  return true;
};

// not the same number of letters
console.log(isAnagram('abc', 'ab') === false);


const s = 'anagram';
const t = 'nagaram';
console.log(isAnagram(s, t) === true);


const a = 'rat';
const b = 'car';
console.log(isAnagram(a, b) === false);
