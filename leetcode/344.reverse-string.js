/*
344. Reverse String

Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

 

Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
*/

function reverseString(nums) {
  for (let i = 0; i < Math.floor(nums.length/2); i++) {
    [nums[i], nums[nums.length - 1 - i]] = [ nums[nums.length - 1 - i], nums[i]]
  }
  return nums;
}

function reverseString(s) {
  let start = 0;
  let end = s.length - 1;

  while (start < end) {
    [s[start], s[end]] = [s[end], s[start]];
    start++;
    end--;
  }
  return s;
}

// console.log(reverseString(["h", "e", "l", "l", "o"]));
// console.log(reverseString(["H", "a", "n", "n", "a", "h"]));
