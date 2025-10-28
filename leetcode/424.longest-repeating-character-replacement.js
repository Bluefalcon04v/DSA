/*
424. Longest Repeating Character Replacement

You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.
Return the length of the longest substring containing the same letter you can get after performing the above operations.

Example 1:
Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.

Example 2:
Input: s = "AABABBA", k = 1
Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.
There may exists other ways to achieve this answer too.

*/

function characterReplacement(s, k) {
  let i = (j = 0);
  let map = {};
  map[s[0]] = 1;
  let maxWindow = 0;
  while (j < s.length) {
    if (isWindowValid(map, k)) {
      maxWindow = Math.max(maxWindow, j - i + 1);
      j++;
      map[s[j]] = !map[s[j]] ? 1 : ++map[s[j]];
    } else {
      --map[s[i]];
      i++;
    }
  }
  return maxWindow;
}

var isWindowValid = function (map, k) {
  let totalCount = 0;
  let maxCount = 0;
  for (let i = 0; i < 26; i++) {
    let char = String.fromCharCode(i + 65);
    if (map[char]) {
      totalCount = totalCount + map[char];
      maxCount = Math.max(maxCount, map[char]);
    }
  }
  return totalCount - maxCount <= k;
};

// console.log(characterReplacement("AABABBA", 1));
