// Write a function called strictEquals(a, b)
//  that returns the same value as a === b.
//  Your implementation must not  use the === or !== operators.
// https://repl.it/@DidierCAS/strictEquals-test

// Like a === b
function strictEquals(a, b) {
  if (Object.is(a, b)) {
    // Same value.
    // Is this NaN?
    if (Object.is(a, NaN)) { // We already know a and b are the same, so it's enough to check a.
      // Special case #1.
      return false;
    }
    // They are equal!
    return true;
  }
  // Different value.
  // Are these 0 and -0?
  if (
    (Object.is(a, 0) && Object.is(b, -0))
    || (Object.is(a, -0) && Object.is(b, 0))
  ) {
    // Special case #2.
    return true;
  }
  // They are not equal!
  return false;
}


console.log(strictEquals(2, 3));
console.log(strictEquals(2, 2));
console.log(strictEquals({}, {}));
console.log(strictEquals({ a: 1 }, { a: 1 }));
