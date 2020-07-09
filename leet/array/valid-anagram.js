
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

  const counter = new Map();
  for (let i = 0; i < s.length; i++) {
    counter.set([s.charAt(i)], counter.get(s.charAt(i)) + 1);
    counter.set([t.charAt(i)], counter.get(t.charAt(i)) - 1);
  }
  for (const count of counter.values()) {
    if (count !== 0) {
      return false;
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
