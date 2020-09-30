// https://www.codewars.com/kata/5865a407b359c45982000036

var sloganMaker = function (array) {
  const a = [...(new Set(array))];
  if (a.length === 1) {
    return a;
  } if (a.length === 2) {
    return [`${a[0]} ${a[1]}`, `${a[1]} ${a[0]}`];
  }
  const r = [];
  a.forEach((i, idx) => {
    const subA = a.slice(0, idx).concat(a.slice(idx + 1));
    sloganMaker(subA).forEach((rA) => {
      r.push(`${i} ${rA}`);
    });
  });
  return r;
};
