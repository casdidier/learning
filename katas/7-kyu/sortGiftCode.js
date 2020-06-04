function sortGiftCode(code) {
  return code.split('').sort().join('');
}


// more concise
function sortGiftCode(code) {
  return [...code].sort().join``
}

console.log(sortGiftCode('abcdef') === 'abcdef');
console.log(sortGiftCode('pqksuvy') === 'kpqsuvy');
console.log(sortGiftCode('zyxwvutsrqponmlkjihgfedcba') === 'abcdefghijklmnopqrstuvwxyz');
