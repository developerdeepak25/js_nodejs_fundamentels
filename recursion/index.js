let ar = [[1, 2], 3, [5, 6, [7, 8,[9]]],10];

function flat(arr) {
  if (!Array.isArray(arr)) return [arr];
  let res = [];
  for (let elem of arr) {
    res = [...res, ...flat(elem)];
  }
  return res;
}

let res = flat(ar);

console.log(res);

