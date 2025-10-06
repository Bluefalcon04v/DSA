/*
154. Find Minimum in Rotated Sorted Array II

Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,4,4,5,6,7] might become:
[4,5,6,7,0,1,4] if it was rotated 4 times.
[0,1,4,4,5,6,7] if it was rotated 7 times.
Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].
Given the sorted rotated array nums that may contain duplicates, return the minimum element of this array.
You must decrease the overall operation steps as much as possible.

Example 1:
Input: nums = [1,3,5]
Output: 1

Example 2:
Input: nums = [2,2,2,0,1]
Output: 0

*/

function findMin(nums) {
  let l = 0;
  let r = nums.length - 1;
  while (l <= r) {
    if (nums[l] <= nums[r]) {
      return nums[l];
    }
    let m = l + Math.floor((r - l) / 2);
    let i = 1;
    while (nums[m] === nums[m - i]) {
      i--;
    }
    if (i < 0) {
      l = m + 1;
    }
    if (nums[m] < nums[i]) {
      return nums[m];
    }
    if (nums[l] < nums[m]) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }
}

console.log(findMin([3, 1, 3]));
console.log(findMin([2, 2, 2, 2, 2]));
console.log(findMin([2, 2, 2, 0, 1]));
