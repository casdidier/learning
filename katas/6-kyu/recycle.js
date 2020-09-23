// https://www.codewars.com/kata/5b6db1acb118141f6b000060/solutions/javascript

function recycle(arr) {
  const paper = []; const glass = []; const organic = []; const
    plastic = [];

  arr.forEach((obj) => {
    if (obj.material === 'paper' || obj.secondMaterial === 'paper') paper.push(obj.type);
    if (obj.material === 'glass' || obj.secondMaterial === 'glass') glass.push(obj.type);
    if (obj.material === 'organic' || obj.secondMaterial === 'organic') organic.push(obj.type);
    if (obj.material === 'plastic' || obj.secondMaterial === 'plastic') plastic.push(obj.type);
  });

  return [paper, glass, organic, plastic];
}


// reducer technique
const recycle = a => a.reduce((r, e) => {
  r[rule[e.material]].push(e.type);
  if (e.secondMaterial) r[rule[e.secondMaterial]].push(e.type);
  return r;
}, [[], [], [], []]);

const rule = {
  paper: 0,
  glass: 1,
  organic: 2,
  plastic: 3
};


// shortest solution FP approach
const recyclerMaterials = ['paper', 'glass', 'organic', 'plastic'];

function recycle(objects) {
  return recyclerMaterials.map(m => objects.filter(o => o.material == m || o.secondMaterial == m).map(o => o.type));
}