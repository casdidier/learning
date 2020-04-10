// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript

// function duplicateEncode(s) {

//     const count   = {};
//     let   encoded = '';

//     // store the order and count 
//     for (let i = 0; i < s.length; i++) {

//         const letter = s[i].toLowerCase();

//         !count[letter] ? count[letter] = 1 : count[letter] += 1;
//     }

//     for (const letter of s) {

//         if (count[letter.toLowerCase()] === 1) { encoded += '('; }
//         else {
//             encoded += ')';
//         }
//     }
//     return encoded;
// }


// cleaner
function duplicateEncode(word) {
    const isDuplicate = Array.prototype.reduce.call(word, (dup, letter) => (letter.toLowerCase() in dup ? dup[letter.toLowerCase()] = true : dup[letter.toLowerCase()] = false, dup), {});
    return Array.prototype.reduce.call(word, (parenthesis, letter) => isDuplicate[letter.toLowerCase()] ? parenthesis + ')' : parenthesis + '(', '');
}



console.log(duplicateEncode("din"), "(((");
console.log(duplicateEncode("recede"), "()()()");
console.log(duplicateEncode("Success"), ")())())", "should ignore case");
console.log(duplicateEncode("(( @"), "))((");
