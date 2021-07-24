const selectionSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    let currentMin = i;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[currentMin]) {
        currentMin = j;
      }
    }
    [arr[i], arr[currentMin]] = [arr[currentMin], arr[i]];
  }
  return arr;
};

console.log(selectionSort([2, 5, 1, 20]));
