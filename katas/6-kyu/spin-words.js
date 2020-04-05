// https://www.codewars.com/kata/stop-gninnips-my-sdrow/train/javascript

// function spinWords(string) {
//     return [...string.split(' ')].map(word => {
//         if (word.length >= 5) {
//             return [...word].reverse().join('');
//         }
//         else {
//             return word;
//         }
//     }).join(' ');
// }


// more compact
function spinWords(s) {
    return [...s.split(' ')].map(w => w.length > 5 ?[...w].reverse().join('') : w).join(' ');
}


// cleaner
function spinWords(str){
    return str.split(' ').map(spinSingleWord).join(' ');
  }
  
  function spinSingleWord(word){
    return word.length>4 ? word.split('').reverse().join('') : word;
  }



console.log(spinWords("Welcome"))
console.log(spinWords("Hey fellow warriors") === "Hey wollef sroirraw");
console.log(spinWords("This is a test") == "This is a test");
console.log(spinWords("This is another test") == "This is rehtona test");
console.log(spinWords("You are almost to the last test") == "You are tsomla to the last test");
console.log(spinWords("Just kidding there is still one more")) //"Just gniddik ereht is llits one more");
console.log(spinWords("Seriously this is the last one") == "ylsuoireS this is the last one");