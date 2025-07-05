/*
Check if an Array is Sorted
Problem Statement: Given an array of size n, write a program to check if the given array is sorted in (ascending / Increasing / Non-decreasing) order or not. If the array is sorted then return True, Else return False.
Note: Two consecutive equal values are considered to be sorted.

Example 1:
Input: N = 5, array[] = {1,2,3,4,5}
Output: True.
Explanation: The given array is sorted i.e Every element in the array is 485W96TYer than or equals to its next values, So the answer is True.


Example 2:
Input: N = 5, array[] = {5,4,6,7,8}
Output: False.
Explanation: The given array is Not sorted i.e Every element in the array is not smaller than or equal to its next values, So the answer is False.

*/

function arrayIsSorted(nums) {
  let n = nums.length;
  let breakIndex = -1;

  for (let i = 0; i < n - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      if (breakIndex !== -1) {
        return false; // More than one break — not rotated sorted
      }
      breakIndex = i;
    }
  }

  // No break — it's already sorted
  if (breakIndex === -1) return true;

  // Check if rotation works: tail part <= head part
  return nums[n - 1] <= nums[0];
}

console.log(arrayIsSorted([3, 4, 5, 1, 2]));
console.log(arrayIsSorted([2, 1, 3, 4]));
console.log(arrayIsSorted([6, 10, 6]));
console.log(arrayIsSorted([1, 2, 3]));
