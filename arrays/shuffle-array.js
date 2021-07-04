function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    // Math.random() returns a floating point number
    // in range 0 to i+1 but not including i+1
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]]; // swap using array destructuring
  }
  return arr;
}

console.log(shuffle([1, 2, 3, 4, 5, 6, 7, 8]));
