/*
1221. Split a String in Balanced Strings

Balanced strings are those that have an equal quantity of 'L' and 'R' characters.
Given a balanced string s, split it into some number of substrings such that:
Each substring is balanced.
Return the maximum number of balanced strings you can obtain.

Example 1:
Input: s = "RLRRLLRLRL"
Output: 4
Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.

Example 2:
Input: s = "RLRRRLLRLL"
Output: 2
Explanation: s can be split into "RL", "RRRLLRLL", each substring contains same number of 'L' and 'R'.
Note that s cannot be split into "RL", "RR", "RL", "LR", "LL", because the 2nd and 5th substrings are not balanced.

Example 3:
Input: s = "LLLLRRRR"
Output: 1
Explanation: s can be split into "LLLLRRRR".
 
*/

// with 2 variables
function balancedStringSplit(s) {
  let count = 0;
  let noOfR = (noOfL = 0);

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "R") {
      noOfR++;
    } else {
      noOfL++;
    }
    if (noOfR === noOfL && noOfR !== 0) {
      count++;
      noOfL = noOfR = 0;
    }
  }
  return count;
}

// console.log(balancedStringSplit("RLRRLLRLRL"));

// with 1 variables
function balancedStringSplit2(s) {
  let count = 0;
  let temp = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "R") {
      temp++;
    } else {
      temp--;
    }
    if (temp === 0) {
      count++;
      noOfL = noOfR = 0;
    }
  }
  return count;
}

// console.log(balancedStringSplit2("RLRRLLRLRL"));
