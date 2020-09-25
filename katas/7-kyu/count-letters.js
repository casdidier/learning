// https://www.codewars.com/kata/5808ff71c7cfa1c6aa00006d/train/javascript

function letterCount(s) {
  return s.split('').reduce((prev, value) => {
    if (!prev[value]) { prev[value] = 1; } else { prev[value] += 1; }
    return prev;
  }, {});
}



const letterCount = s => [...s].reduce((a, b) => (a[b] = (a[b] || 0) + 1, a), {})
