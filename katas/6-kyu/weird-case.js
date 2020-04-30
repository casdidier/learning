// https://www.codewars.com/kata/weird-string-case/train/javascript

// function toWeirdCase(string){
//   return string.split('').map((letter, i) => {
//       if ( i % 2 === 0) {
//           return letter.toUpperCase();
//       }
//       return letter
//   }).join('');
// }



function toWeirdCase(string){

    const wordReducer = (word) =>  {
        return word.split('').reduce((weirdWord, letter, i) => {
            if ( i % 2 === 0) {
                return weirdWord+letter.toUpperCase();
            }
            return weirdWord+letter
            }, ''
        )
    }

    return string.split(' ').map(word => wordReducer(word)).join(' ');

}



console.log(toWeirdCase('This'), 'ThIs');
console.log(toWeirdCase('is'), 'Is');
console.log(toWeirdCase('This is a test'), 'ThIs Is A TeSt');