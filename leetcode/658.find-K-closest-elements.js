/*
658. Find K Closest Elements
Given a sorted integer array arr, two integers k and x, return the k closest integers to x in the array. The result should also be sorted in ascending order.
An integer a is closer to x than an integer b if:
|a - x| < |b - x|, or
|a - x| == |b - x| and a < b
 
Example 1:
Input: arr = [1,2,3,4,5], k = 4, x = 3
Output: [1,2,3,4]

Example 2:
Input: arr = [1,1,2,3,4,5], k = 4, x = -1
Output: [1,1,2,3]

*/

function findClosestElements(arr, k, x) {
  let l = 0;
  let r = arr.length - 1;

  while (l < r) {
    // because it will give the point where it starting
    let m = l + Math.floor((r - l) / 2);
    let a = x - arr[m];
    let b = arr[m + k] - x;
    if (a > b) {
      l = m + 1;
    } else {
      r = m;
    }
  }

  let ans = [];
  for (let i = l; i < l + k; i++) {
    ans.push(arr[i]);
  }

  return ans;
}

// console.log(findClosestElements([1, 2, 3, 4, 5], 4, 3));
// console.log(findClosestElements([1, 1, 2, 3, 4, 5], 4, -1));