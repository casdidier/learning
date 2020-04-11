// https://www.codewars.com/kata/find-the-capitals-1/train/javascript


// const capitals = function (word) {
//     let arr = [];

//     [...word].forEach((letter, index) => {
//         if (letter.toLocaleUpperCase() === letter) { arr.push(index) }
//     })

//     return arr;
// };


const capitals = (word) => {
    return [...word]
        .map((letter, index) => letter.toLocaleUpperCase() === letter ? index : 'nope')
        .filter(x => x !== 'nope')
}

// solution 
var capitals = function (word) {
    return word.split('').reduce(function (n, l, i) {
        return /[A-Z]/.test(l) && n.push(i), n;
    }, []);
};

console.log(capitals('CodEWaRs'), [0, 3, 4, 6]);
