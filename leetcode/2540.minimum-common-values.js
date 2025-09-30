/*
2540. Minimum Common Value

Given two integer arrays nums1 and nums2, sorted in non-decreasing order, return the minimum integer common to both arrays. If there is no common integer amongst nums1 and nums2, return -1.
Note that an integer is said to be common to nums1 and nums2 if both arrays have at least one occurrence of that integer.

Example 1:
Input: nums1 = [1,2,3], nums2 = [2,4]
Output: 2
Explanation: The smallest element common to both arrays is 2, so we return 2.

Example 2:
Input: nums1 = [1,2,3,6], nums2 = [2,3,4,5]
Output: 2
Explanation: There are two common elements in the array 2 and 3 out of which 2 is the smallest, so 2 is returned.

*/

// Approach 1: T = O((n + m) and S = O(n)
function getCommon(nums1, nums2) {
  let set1 = new Set(nums1);

  for (let i = 0; i < nums2.length; i++) {
    if (set1.has(nums2[i])) {
      return nums2[i];
    }
  }
  return -1;
}

// Approach 2: T = O(n + m) and S = O(1)
function getCommon2(nums1, nums2) {
  let i = (j = 0);

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] === nums2[j]) {
      return nums1[i];
    }
    nums1[i] < nums2[j] ? i++ : j++;
  }
  return -1;
}

// console.log(getCommon2([1, 2, 3], [2, 4]));
// console.log(getCommon2([1, 2, 3, 6], [2, 3, 4, 5]));
