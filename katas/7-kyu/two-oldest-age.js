// https://www.codewars.com/kata/511f11d355fe575d2c000001/train/javascript


function twoOldestAges(ages) {
  // sort the array lowest to highest
  ages.sort((a, b) => a - b);
  // return the last 2 values in the array
  return ages.slice(ages.length - 2);
}
