/*
? 459. Repeated Substring Pattern

Given a string s, check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.

Example 1:
Input: s = "abab"
Output: true
Explanation: It is the substring "ab" twice.

Example 2:
Input: s = "aba"
Output: false

Example 3:
Input: s = "abcabcabcabc"
Output: true
Explanation: It is the substring "abc" four times or the substring "abcabc" twice.

*/

function repeatedSubStr(s) {
  let n = s.length;
  let split = Math.floor(n / 2);
  for (let i = split; i >= 1; i--) {
    // if split is even
    if ((n / i) % 2 == 0) {
      let splitCh = s.slice(0, i);
      let newStr = "";
      for (let j = 0; j <= n / i; j++) {
        newStr += splitCh;
        if (newStr === s) {
          return true;
        }
      }
    }
  }
  return false;
}

console.log(repeatedSubStr("ababba")); // false
