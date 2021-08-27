var merge = function(intervals) {
  let result = [];
  
  if(intervals.length === 0) {
      return intervals;
  }
  
  intervals.sort((a,b) => a[0] - b[0]);
  
  let buffer = intervals[0];
  for(i = 1; i < intervals.length; i++) {

    // [[1,4], [4,6], [8,10]] => [[1,6], [8,10]]
      if(intervals[i][0] <= buffer[1]) {
          buffer = [buffer[0], Math.max(buffer[1], intervals[i][1])]
      } else {
          result.push(buffer);
          buffer = intervals[i];
      }
  }
  
  result.push(buffer);
  return result;
};

//in-place
var mergeV2 = function(intervals) {
  if(intervals.length === 0) return intervals;
  intervals.sort((arr1,arr2)=>arr1[0] - arr2[0])
  
  let i = 0;
  
  while(i < intervals.length - 1) {
      const [_, firstRight] = intervals[i];
      const [secondLeft, secondRight] = intervals[i + 1];
      
      if(secondLeft <= firstRight) {
          //merge first with second
          intervals[i][1] = Math.max(firstRight, secondRight);
          
          //remove second
          intervals.splice(i+1, 1)
      } else {
          //can't do nothing so move ahead
          i++;
      }
  }
  
  return intervals;
};

