// https://www.interviewcake.com/question/javascript/permutation-palindrome

function hasPalindromePermutation(theString) {
  // Track characters we've seen an odd number of times
  // use of object to avoid brute force method
  const unpairedCharacters = new Set();

  for (const char of theString) {
    if (unpairedCharacters.has(char)) {
      unpairedCharacters.delete(char);
    } else {
      unpairedCharacters.add(char);
    }
  }

  // The string has a palindrome permutation if it
  // has one or zero characters without a pair
  return unpairedCharacters.size <= 1;
}


// always ask : can i save time by using an object ?
