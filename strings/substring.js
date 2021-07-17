// https://leetcode.com/problems/implement-strstr/

var strStr = function(haystack, needle) {
    if(needle.length === 0) return 0;
    if(haystack.length < needle.length) return -1;
    for(let i = 0; i < haystack.length; i++) {
        let k = i, j = 0;
        while(haystack[k] === needle[j] && j < needle.length) {
            k++;
            j++;
        }
        if(j === needle.length) return i;
    }
    return -1;
};

var strStr = function(haystack, needle) {
  if(needle.length === 0) return 0;
  if(!haystack.includes(needle)) return -1;
  return haystack.split(needle)[0].length;
};