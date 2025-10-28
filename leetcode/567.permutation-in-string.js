/*
567. Permutation in String

Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.
In other words, return true if one of s1's permutations is the substring of s2.

Example 1:
Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").

Example 2: 
Input: s1 = "ab", s2 = "eidboaoo"
Output: false

*/

// Time complexity = O(n), S(m)
var checkInclusion = function (s1, s2) {
  let arrayW = Array(26).fill(0);
  let arrayS = Array(26).fill(0);
  let window_len = s1.length;

  for (let i = 0; i < window_len; i++) {
    ++arrayW[s1.charCodeAt(i) - 97];
    ++arrayS[s2.charCodeAt(i) - 97];
  }

  let i = 0;
  let j = window_len - 1;
  while (j < s2.length) {
    if (arraySame(arrayW, arrayS)) {
      return true;
    } else {
      --arrayS[s2.charCodeAt(i) - 97];
      i++;
      j++;
      ++arrayS[s2.charCodeAt(j) - 97];
    }
  }

  return false;
};

var arraySame = function (arrayW, arrayS) {
  for (let i = 0; i < 26; i++) {
    if (arrayS[i] !== arrayW[i]) {
      return false;
    }
  }
  return true;
};

// console.log(checkInclusion("ab", "eidbiaobiao"));
