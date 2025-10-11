/*
28. Find the Index of the First Occurrence in a String
Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1:
Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.

Example 2:
Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.

*/
// Sliding Window T = O(nm), S = O(1)
function strStr(haystack, needle) {
  let window = needle.length;
  for (let i = 0; i < haystack.length - window; i++) {
    let j = 0;
    for (j = 0; j < window; j++) {
      if (haystack[i + j] !== needle[j]) {
        break;
      }
    }
    if (j == window) return i;
  }
  return -1;
}

function strStr2(haystack, needle) {
  let n = haystack.length;
  let m = needle.length;

  let lps = [0];
  let i = 0;
  let j = 1;
  while (j < m) {
    if (needle[i] === needle[j]) {
      lps[j] = i + 1;
      j++;
      i++;
    } else {
      if (i === 0) {
        lps[j] = 0;
        j++;
      } else {
        i = lps[i - 1];
      }
    }
  }

  i = 0;
  j = 0;
  while (i < n) {
    if (haystack[i] === needle[j]) {
      i++;
      j++;
    } else {
      if (j === 0) {
        i++;
      } else {
        j = lps[j - 1];
      }
    }
    if (j === m) return i - m;
  }

  return -1;
}

// console.log(strStr2("sedbutsadnw", "sad"));
// console.log(strStr2("leetcode", "leeto"));
// console.log(strStr2("onionionskt", "onions"));
