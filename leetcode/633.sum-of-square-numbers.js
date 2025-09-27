/*
633. Sum of Square Numbers

Given a non-negative integer c, decide whether there're two integers a and b such that a2 + b2 = c.

Example 1:
Input: c = 5
Output: true
Explanation: 1 * 1 + 2 * 2 = 5

Example 2:
Input: c = 3
Output: false
*/

function judgeSquareSum(c) {
  let a = 0;
  let b = Math.floor(Math.sqrt(c));

  while (a <= b) {
    let multi = a * a + b * b;
    if (multi === c) return true;
    if (multi > c) {
      b--;
    } else {
      a++;
    }
  }
  return false;
}

// console.log(judgeSquareSum(999999999999));
