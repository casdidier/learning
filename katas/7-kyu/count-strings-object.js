// https://www.codewars.com/kata/565b3542af398bfb50000003

function strCount(obj) {
  let count = 0;
  for (key in obj) {
    if (typeof obj[key] === 'string') count++;
    if (typeof obj[key] === 'object') count += strCount(obj[key]);
  }
  return count;
}


// with reducer
const strCount = obj =>
  typeof obj !== `string` ? Object.values(obj || {}).reduce((pre, val) => pre + strCount(val), 0) : 1;