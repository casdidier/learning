// https://www.codewars.com/kata/v-a-p-o-r-c-o-d-e/train/javascript

function vaporcode(string) {
  return string
    .toUpperCase()
    .split('')
    .filter(letter => letter !== ' ')
    .join('  ');
}

console.log(vaporcode("Let's go to the movies"), "L  E  T  '  S  G  O  T  O  T  H  E  M  O  V  I  E  S");
console.log(vaporcode("Why isn't my code working?") === "W  H  Y  I  S  N  '  T  M  Y  C  O  D  E  W  O  R  K  I  N  G  ?");
