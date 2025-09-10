/*
58 Length of last word

Given a string s consisting of words and spaces, return the length of the last word in the string.
A word is a maximal substring consisting of non-space characters only.

Example 1:
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
    
Example 2:
Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.

Example 3:
Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.

*/

// Approach 1
function lengthOfLastWord(s) {
  s = s.trim();
  s = s.split(" ");
  return s[s.length - 1].length;
}

// Approach 2
function lengthOfLastWord2(s) {
  let n = s.length - 1;
  while (n >= 0 && s[n] === " ") {
    n--;
  }

  let counter = 0;
  while (n >= 0 && s[n] != " ") {
    counter++;
    n--;
  }
  return counter;
}

// lengthOfLastWord2("   fly me   to   the moon  ");
