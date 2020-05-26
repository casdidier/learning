// https://www.interviewcake.com/question/javascript/inflight-entertainment?course=fc1&section=hashing-and-hash-tables

function canTwoMoviesFillFlight(movieLengths, flightLength) {
  // convert movies length to min
  const movieLengthsMin = movieLengths.map(x => x * 60);

  // Movie lengths we've seen so far
  const movieLengthsSeen = new Set();

  for (let i = 0; i < movieLengthsMin.length; i++) {
    const firstMovieLength = movieLengthsMin[i];

    const matchingSecondMovieLength = flightLength - firstMovieLength;

    // short flight
    if (movieLengthsMin.every(movie => movie > flightLength)) { return false; }

    // check if within 20min there is a movie in the already seen
    for (let j = 0; j < 20; j++) {
      if (movieLengthsSeen.has(matchingSecondMovieLength + i)) {
        return true;
      }

      if (movieLengthsSeen.has(matchingSecondMovieLength - i)) {
        return true;
      }
    }


    movieLengthsSeen.add(firstMovieLength);
  }

  // We never found a match, so return false
  return false;
}


let desc = 'short flight';
let actual = canTwoMoviesFillFlight([2, 4], 1);
let expected = false;
assertEquals(actual, expected, desc);

desc = 'long flight';
actual = canTwoMoviesFillFlight([2, 4], 6);
expected = true;
assertEquals(actual, expected, desc);

desc = 'one movie half flight length';
actual = canTwoMoviesFillFlight([3, 8], 6);
expected = false;
assertEquals(actual, expected, desc);

desc = 'two movies half flight length';
actual = canTwoMoviesFillFlight([3, 8, 3], 6);
expected = true;
assertEquals(actual, expected, desc);

desc = 'lots of possible pairs';
actual = canTwoMoviesFillFlight([1, 2, 3, 4, 5, 6], 7);
expected = true;
assertEquals(actual, expected, desc);

desc = 'not using first movie';
actual = canTwoMoviesFillFlight([4, 3, 2], 5);
expected = true;
assertEquals(actual, expected, desc);

desc = 'only one movie';
actual = canTwoMoviesFillFlight([6], 6);
expected = false;
assertEquals(actual, expected, desc);

desc = 'no movies';
actual = canTwoMoviesFillFlight([], 2);
expected = false;
assertEquals(actual, expected, desc);

// BONUS
// What if we wanted the movie lengths to sum to something close to the flight length (say, within 20 minutes)?
desc = 'within 20min close to the flight';
actual = canTwoMoviesFillFlight([120, 123, 140, 110], 235);
expected = true;
assertEquals(actual, expected, desc);
