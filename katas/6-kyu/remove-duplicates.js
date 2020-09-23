// https://www.codewars.com/kata/59f08f89a5e129c543000069/solutions/javascript

const dup = (s) => s.map(arr => [...arr].filter((item, index) => arr[index+1] !== arr[index]).join(''))