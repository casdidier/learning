// https://www.codewars.com/kata/55eea63119278d571d00006a/solutions

function nextId(ids) {
  const used = new Set(ids);
  for (let i = 0; i <= ids.length; i++) {
    if (!used.has(i)) return i;
  }
}
