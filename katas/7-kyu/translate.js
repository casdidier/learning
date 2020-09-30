// https://www.codewars.com/kata/5864e2c473bd9c67b70002ba/solutions/javascript

function translate(word) {
  if (word.length < 2) return word;
  if ('aeiou'.includes(word[0])) {
    return `${word}ay`;
  }
  return `${word.slice(1) + word[0]}ay`;
}
