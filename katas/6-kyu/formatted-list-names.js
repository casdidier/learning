// https://www.codewars.com/kata/format-a-string-of-names-like-bart-lisa-and-maggie/train/javascript
function list(names) {
  return names.reduce((sentence, { name }, i) => {
    if (i == names.length - 1) {
      return sentence + name;
    } else if (i == names.length - 2) {
      return sentence + name + ' & ';
    } else {
      return sentence + name + ', ';
    }
  }, '');
}




console.log(list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }]))
// returns 'Bart, Lisa & Maggie'

console.log(list([{ name: 'Bart' }, { name: 'Lisa' }]))
// returns 'Bart & Lisa'

console.log(list([{ name: 'Bart' }]))
// returns 'Bart'

console.log(list([]))
// returns ''