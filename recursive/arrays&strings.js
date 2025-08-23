// ------------------------------------------------------------------------------------- Print all elements of an array using recursion

function printElem(nums) {
  if (nums.length == 0) return []; // setting in the array
  let digit = nums.shift();
  return [digit, ...printElem(nums)];
}

// console.log(printElem([2, 5, 1, 9, 8]));

// ------------------------------------------------------------------------------------- Return the sum of all elements in an array
function sumOfElem(nums) {
  if (nums.length == 1) return nums[0]; // Getting the number
  let digit = nums.shift();
  return digit + printElem(nums);
}

// console.log(sumOfElem([2, 5, 3, 1, 2]));

// ------------------------------------------------------------------------------------- Check if a string is a palindrome using recursion
function isPalindrome(s) {
  return s;
}

// console.log(isPalindrome("racecar"));
// console.log(isPalindrome("hello"));
