// function flatten (arr) {
//   return arr.reduce((acc, curr) => acc.concat(Array.isArray(curr) ? flatten(curr) : curr), []);
// }

function flatten(arr) {
  let acc = [];
  arr.forEach(ele => {
    if (Array.isArray(ele)) {
      acc = acc.concat(flatten(ele));
    } else {
      acc.push(ele);
    }
  });
  return acc;
}

const arr = [
  [1, 2],
  [3, 4, [5, 6], []],
];

const flattened = flatten(arr);
console.log(flattened);
