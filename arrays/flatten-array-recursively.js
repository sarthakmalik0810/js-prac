// function flatten (arr) {
//   return arr.reduce((acc, curr) => acc.concat(Array.isArray(curr) ? flatten(curr) : curr), []);
// }

function flatten(arr) {
  let acc = [];
  arr.forEach((ele) => {
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
  [3, 4, [5, 6, [7, [8]]]],
];

function flattenWithLevel(arr, level = 1) {
  let acc = [];
  arr.forEach((ele) => {
    if (Array.isArray(ele) && level > 0) {
      acc = [...acc, ...flattenWithLevel(ele, level - 1)];
    } else {
      acc.push(ele);
    }
  });

  return acc;
}

const flattened = flattenWithLevel(arr);
console.log(flattened);
