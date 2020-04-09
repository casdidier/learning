function firstNonRepeatingLetter(s) {
    console.log(s);

    if (s.length <= 1) return s;

    // store the letters counting and order of first appearance
    const count = {};

    // store the order and count 
    for (let i = 0; i < s.length; i++) {

        const letter = s[i].toLowerCase();

        !count[letter] ? (count[letter] = {}, count[letter].count = 1, count[letter].order = i) : count[letter].count += 1;
    }

    const rankLetterArray = Object.values(count)
        .filter(letter => letter.count == 1)
        .sort((a, b) => a.order - b.order);

    return rankLetterArray.length >= 1 ? s[rankLetterArray[0].order] : '';
}

// one line , correction
function firstNonRepeatingLetter(s) {
    return s[s.toLowerCase().split('').findIndex(letter => s.toLowerCase().split('').filter(l => l === letter).length === 1)] || '';
}




console.log(firstNonRepeatingLetter('a'), 'a');
console.log(firstNonRepeatingLetter('stress'), 't');
console.log(firstNonRepeatingLetter('moonmen'), 'e');
console.log(firstNonRepeatingLetter('abba'), 'e');
