
// You should implement your task here.

function towelSort(matrix) {
  if (!matrix) return [];
  let ret = [];
  let forward = true;
  for (let el of matrix)
  {
    if (forward) ret.push(...el);
    else ret.push(...el.slice().reverse());
    forward = !forward;
  }
  return ret;
}

module.exports = towelSort;

// let matrix = [
//   [ 1, 2, 3 ],
//   [ 4, 5, 6 ],
//   [ 7, 8, 9 ],
//  ];

// console.log(towelSort(matrix));
// console.log(matrix);