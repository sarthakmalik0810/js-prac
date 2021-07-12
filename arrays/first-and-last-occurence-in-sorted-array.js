var searchRange = function(nums, target) {
  let low = 0;
  let high = nums.length - 1;
  let mid;
  
  //find left
  //decreasing high if equal to target because we want to move towards left to find left most element

  while(low <= high) {
      mid = Math.floor((low + high)/2);
      if(nums[mid] >= target) high = mid - 1;
      else low = mid + 1;
  }
  
  if(nums[low]!==target) return [-1, -1];
  
  const start = low;
  
  //reset low and high
  low = 0;
  high = nums.length - 1;
  
  //find right
  //increasing low if equal to target because we want to move towards right to find right most element
  while(low <= high) {
      mid = Math.floor((low + high)/2);
      if(nums[mid] <= target) low = mid + 1;
      else high = mid - 1;
  }
  return [start, high]
  
};

// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array