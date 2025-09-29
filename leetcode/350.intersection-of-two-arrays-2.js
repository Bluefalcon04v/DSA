/*
350 Intersection Of Two Arrays 2
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

Example 1:
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]

Example 2:
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Explanation: [9,4] is also accepted.

*/

function intersect(nums1, nums2) {
  let map1 = {};

  for (let i = 0; i < nums1.length; i++) {
    if (!map1[nums1[i]]) {
      map1[nums1[i]] = 1;
    } else {
      map1[nums1[i]]++;
    }
  }

  let res = [];

  for (let n of nums2) {
    if (map1[n]) {
      map1[n]--;
      res.push(n);
    }
  }
  return res;
}

// console.log(intersect([1, 2, 2, 1], [2, 2]));
// console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));
