// Whole-script strict mode syntax


const reaction = 'yikes';
// declaration de reaction et assigne une valeur primitives 'yikes'
reaction[0] = 'l';
// ne modifie pas le 0 ieme terme de reaction par 'l' car string immutable
console.log(reaction); // yikes


// Variables Are Wires
let pet = 'Narwhal';
    pet = 'The Kraken';
console.log(pet); // ?'The Kraken'
