// program to print maximum sum of subarray
var maxSubArray = function (nums) {
  let currMax = nums[0];
  let maxTillNow = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currMax = Math.max(nums[i], currMax + nums[i]);

    if (currMax > maxTillNow) {
      maxTillNow = currMax;
    }
  }
  return maxTillNow;
};

// program to print the subarray with max sum
const subArrayWithMaxSum = function (nums) {
  let currMax = nums[0];
  let maxTillNow = nums[0];
  let endIndex;
  let newArr = [];

  for (let i = 0; i < nums.length; i++) {
    currMax = Math.max(nums[i], nums[i] + currMax);

    if (currMax > maxTillNow) {
      maxTillNow = currMax;
      endIndex = i;
    }
  }

  let startIndex = endIndex;

  // Traverse in left direction to
  // find start Index of subarray
  while (startIndex >= 0) {
    maxTillNow -= nums[startIndex];

    if (maxTillNow === 0) {
      break;
    }
    startIndex--;
  }

  // Printing the elements of
  // subarray with
  for (let i = startIndex; i <= endIndex; i++) {
    newArr.push(nums[i]);
  }
  return newArr;
};
