/*
540. Single Element in a Sorted Array
You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once.
Return the single element that appears only once.
Your solution must run in O(log n) time and O(1) space.

Example 1:
Input: nums = [1,1,2,3,3,4,4,8,8]
Output: 2

Example 2:
Input: nums = [3,3,7,7,10,11,11]
Output: 10

*/
function singleElem(nums) {
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    let m = l + Math.floor((r - l) / 2);
    if (nums[m] !== nums[m - 1] && nums[m] !== nums[m + 1]) return nums[m];
    if (nums[m] === nums[m - 1]) {
      let len = m - 1 - l;
      if (len % 2 !== 0) {
        r = m - 2;
      } else {
        l = m + 1;
      }
    } else {
      let len2 = r - m + 1;
      if (len2 % 2 !== 0) {
        l = m + 2;
      } else {
        r = m - 1;
      }
    }
  }
}

// console.log(singleElem([1, 1, 2, 3, 3, 4, 4, 5, 5]));
