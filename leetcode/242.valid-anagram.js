/*
242. Valid Anagram

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false

*/

// Approach 1 with build in methods T = O(n logn), S = O(n)
function validAnagram(s, t) {
  s = s.split("").sort("").join("");
  t = t.split("").sort("").join("");
  return s == t;
}

// Approach 2 using map  T = O(n), S = O(1)

function validAnagram2(s, t) {
  if (s.length !== t.length) return false;

  let map = {};
  for (let i = 0; i < s.length; i++) {
    if (!map[s[i]]) {
      map[s[i]] = 1;
    } else {
      map[s[i]]++;
    }
  }
  for (let i = 0; i < t.length; i++) {
    if (!map[t[i]] || map[t[i]] < 0) {
      return false;
    } else {
      map[t[i]]--;
    }
  }
  return true;
}
