// const permute = function(nums) {

//   let permutations = []
  
//   let findPermutations = function(visited = new Set(), currPerm = []) {
//       if (currPerm.length === nums.length) {
//           permutations.push(currPerm)
//           return
//       }
//       for (let i = 0; i < nums.length; i++) {
//           if(!visited.has(i)) {
//               findPermutations(new Set([...visited, i]), [...currPerm, nums[i]])
//           }
//       }
//   }
  
//   findPermutations()
  
//   return permutations;
  
// };


var permute = function(nums) {
  let output = [];
  
  const swap = (arrayToSwap, indexA, indexB) => {
      [arrayToSwap[indexA], arrayToSwap[indexB]] = [arrayToSwap[indexB], arrayToSwap[indexA]];
  }
  
  const generate = (n, heapArr) => {
      if(n === 1) {
          output.push([...heapArr]);
      } else {
        // Generate permutations with nth unaltered 
        // initially n = length of Array
          generate(n - 1, heapArr);
          
          // Generate permutations for nth swapped with each n-1 initial
          for(let i = 0; i < n - 1; i++) {
              if(n%2 === 0) {
                  swap(heapArr, i, n - 1);
              } else {
                  swap(heapArr, 0, n - 1);
              }
              generate(n - 1, heapArr);
          }
      }
  }
  
  generate(nums.length, nums);
  
  return output;
};
