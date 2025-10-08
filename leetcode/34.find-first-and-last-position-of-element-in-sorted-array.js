/*
34. Find First and Last Position of Element in Sorted Array

Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
Example 3:

Input: nums = [], target = 0
Output: [-1,-1]

*/

// T = O(n)
function searchRange(nums, target) {
  if (nums.length < 1) return [-1, -1];
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    let m = l + Math.floor((r - l) / 2);
    if (nums[m] === target) {
      let i = m;
      let j = m;
      while (nums[i] == target) {
        i--;
      }
      while (nums[j] == target) {
        j++;
      }
      return [i + 1, j - 1];
    }
    if (nums[m] > target) {
      r = m - 1;
    } else {
      l = m + 1;
    }
  }
  return [-1, -1];
}

// T = O(log n)
function searchRange2(nums, target) {
  let l = 0;
  let r = nums.length - 1;
  let ans = [-1, -1];
  while (l < r) {
    let m = l + Math.floor((r - l) / 2);
    if (nums[m] < target) {
      l = m + 1;
    } else {
      r = m;
    }
  }
  if (nums[l] === target) {
    ans[0] = l;
  }
  l = 0;
  r = nums.length - 1;
  while (l < r) {
    let m = l + Math.ceil((r - l) / 2);
    if (nums[m] > target) {
      r = m - 1;
    } else {
      l = m;
    }
  }
  if (nums[r] === target) ans[1] = l;

  return ans;
}

// T = O(log n)
function searchRange3(nums, target) {
  let l = 0;
  let r = nums.length - 1;
  let ans = [-1, -1];
  while (l <= r) {
    let m = l + Math.ceil((r - l) / 2);
    if (nums[m] > target) {
      r = m - 1;
    } else if (nums[m] === target) {
      ans[0] = m;
      r = m - 1;
    } else {
      l = m + 1;
    }
  }
  l = 0;
  r = nums.length - 1;
  while (l <= r) {
    let m = l + Math.ceil((r - l) / 2);
    if (nums[m] > target) {
      r = m - 1;
    } else if (nums[m] === target) {
      ans[1] = m;
      l = m + 1;
    } else {
      l = m + 1;
    }
  }
  return ans;
}

// console.log(searchRange3([5, 7, 7, 8, 8, 10], 8));
// console.log(searchRange3([5, 7, 7, 8, 8, 10], 6));
// console.log(searchRange3([], 1));
