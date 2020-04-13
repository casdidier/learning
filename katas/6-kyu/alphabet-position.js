
// https://www.codewars.com/kata/replace-with-alphabet-position/train/javascript

// var sites = { 
//     links: [
//         {href: 'https://www.example.com/v1/contact-us/ca'},
//         {href: 'https://www.example.com/v1/contact-us/au'},
//         {href: 'https://www.example.com/v1/contact-us/us'},
//         {href: 'https://www.example.com/v1/dontcontact-us/us'}
//     ]
// };

// const regex = new RegExp('/contact\\b', 'g');
// const matchedSites = sites.links.filter(({href}) => href.match(regex));



// let regex = new RegExp('[a-zA-Z]', 'g');

// function alphabetPosition(text) {
//     return text.split('')
//         .filter(x => x.match(regex))
//         .map(letter => letter.toLowerCase())
//         .map(letter => letter.charCodeAt(0) - 97 + 1)
//         .join(' ')
// }


function alphabetPosition(text) {
    return text
        .toUpperCase()
        .match(/[a-z]/gi)
        .map((c) => c.charCodeAt() - 64)
        .join(' ');
}







console.log(alphabetPosition("The sunset sets at twelve o' clock.") === "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");
console.log(alphabetPosition("The narwhal bacons at midnight.") === "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20");