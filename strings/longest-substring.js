// Given a string s, find the length of the longest substring without repeating characters.

var lengthOfLongestSubstring = function(s) {
  // keeps track of the most recent index of each letter.
  const seen = new Map();
  // keeps track of the starting index of the current substring.
  let start = 0;
  // keeps track of the maximum substring length.
  let maxLen = 0;
  
  for(let i = 0; i < s.length; i++) {
      // if the current char was seen, move the start to (1 + the last index of this char)
      // max prevents moving backward, 'start' can only move forward
      if(seen.has(s[i])) start = Math.max(seen.get(s[i]) + 1, start)
      seen.set(s[i], i);
      // maximum of the current substring length and maxLen
      maxLen = Math.max(i - start + 1, maxLen);
  } 
  
  return maxLen;  
};

// var lengthOfLongestSubstring = function(s) {
//   let longest = 0;
//   let current = "";
  
//   for (let i = 0; i < s.length; i++) {
//       current = current.substring(current.indexOf(s[i]) + 1)        
//       current += s[i];
      
//       if (current.length > longest) {
//           longest = current.length;
//       }
//   }
  
//   return longest;
// };

console.log(lengthOfLongestSubstring('dvdf'));