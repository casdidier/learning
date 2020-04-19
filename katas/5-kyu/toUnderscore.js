// https://www.codewars.com/kata/convert-pascalcase-string-into-snake-case/train/javascript

// function toUnderscore(string) {
//   if (typeof string !== 'string') return string.toString();
//   return [...string].map((x, index) => {
//     if (x === x.toUpperCase() && index === 0) { return x.toLowerCase(); }
//     if (+x === Number(x)) { return x; }
//     if (x === x.toUpperCase()) { return `_${x.toLowerCase()}`; }
//     return x;
//   }).join('');
// }


// function toUnderscore(string) {
//   if (typeof string !== 'string') return string.toString();
//   return string
//     .match(/[A-Z0-9][a-z0-9]*/g)
//     .map(word => word.toLowerCase())
//     .join('_');
// }

// function toUnderscore(string) {
//   if (typeof string !== 'string') return string.toString();
//   return string.replace(/[A-Z]/g, (letter) => '_' + letter.toLowerCase()).slice(1);
// }

function toUnderscore(string) {
  if (typeof string !== 'string') return string.toString();
  return string.replace(/([A-Z])/g, '_$1').toLowerCase().slice(1);
}


module.exports = toUnderscore;
