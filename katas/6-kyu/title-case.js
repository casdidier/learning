// https://www.codewars.com/kata/title-case/train/javascript

// function titleCase(title, minorWords) {
//   if (title === '') return title;

//   const minorWordsLowerCase = minorWords.split(' ').map(x => x.toLowerCase());

//   const titleReviewed = title.split(' ').map(x => x[0].toUpperCase() + x.slice(1).toLowerCase())
//     .map(x => (minorWordsLowerCase.includes(x.toLowerCase()) ? x.toLowerCase() : x[0].toUpperCase() + x.slice(1).toLowerCase()))
//     .join(' ');


//   return titleReviewed.split(' ').map((x, i) => (i === 0 ? x[0].toUpperCase() + x.slice(1).toLowerCase() : x)).join(' ');
// }


// function titleCase(title, minorWords) {
//   if (title === '') return title;

//   const minorWordsLowerCase = minorWords.split(' ').map(x => x.toLowerCase());


//   return title.split(' ').reduce((newTitle, curr, i) => {
//     if (i === 0) { return `${newTitle} ${curr[0].toUpperCase()}${curr.slice(1).toLowerCase()}`; }
//     if (minorWordsLowerCase.includes(curr.toLowerCase())) {
//       return `${newTitle} ${curr.toLowerCase()}`;
//     }

//     return `${newTitle} ${curr[0].toUpperCase()}${curr.slice(1).toLowerCase()}`;
//   }, '');
// }


function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

// function titleCase(title, minorWords = '') {
//   if (title.trim() === '') return '';
//   // create structure to use for checking if a given word is a minor word
//   // split minorWords on spaces into a new array
//   // a place to store the minor words structure (object)
//   const checkMinorWords = minorWords
//     .toLowerCase()
//     .split(' ')
//     .reduce((words, word) => {
//       // set property on the minor words structure with the given word and a value of true
//       words[word] = true;
//       return words;
//     }, {});

//   // split the title on spaces into a new array
//   // a place to store the final title
//   // iterate over array of words
//   return title
//     .toLowerCase()
//     .split(' ')
//     .map((word, i) => {
//       if (i === 0) return capitalize(word);
//       if (checkMinorWords[word]) return word;
//       return capitalize(word);
//     }).join(' ');
// }

function titleCase(title, minorWords = '') {
  if (title.trim() === '') return '';

  const checkMinorWords = minorWords
    .toLowerCase()
    .split(' ');

  return title
    .toLowerCase()
    .split(' ')
    .map((word, i) => {
      if (i && checkMinorWords.includes(word)) return word;
      return capitalize(word);
    }).join(' ');
}
// console.log(titleCase('') === '');
console.log(titleCase('a clash of KINGS', 'a an the of') === 'A Clash of Kings');
// console.log(titleCase('THE WIND IN THE WILLOWS', 'The In') === 'The Wind in the Willows');
// console.log(titleCase('the quick brown fox') === 'The Quick Brown Fox');
// console.log('A Clash of Kings' === 'A Clash of Kings');
