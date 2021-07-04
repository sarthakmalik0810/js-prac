/**
 * @param {number[]} height
 * @return {number}
 */

// we will use 2 pointer, start from left and right
 var maxArea = function(height) {
  let max = 0; //max area
  let left = 0; // left wall
  let right = height.length - 1; //right wall

  while(left < right) {

    //small side is taken out because it is the deciding factor for the area
      let smallSide = Math.min(height[left], height[right]);
      let area = smallSide * (right - left);
      if(max < area) max = area;
      //we want to move to a larger wall, so we check if left wall is greater than right wall
      //if left wall is bigger we move right to next index other wise me move left wall to next index
      if(height[left] > height[right]) right--;
      else left++;
  }
  return max;
};