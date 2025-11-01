/*
239. Sliding Window Maximum

You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.
Return the max sliding window.

Example 1:
Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [3,3,5,5,6,7]
Explanation: 
Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7

Example 2:
Input: nums = [1], k = 1
Output: [1]
*/

// var maxSlidingWindow = function (nums, k) {
//   let i = 0;
//   let j = k - 1;
//   let tempMax = -Infinity;
//   let ans = [];
//   let z = i;
//   while (j < nums.length) {
//     while (z < i + k) {
//       tempMax = Math.max(tempMax, nums[z]);
//       z++;
//     }

//     ans.push(tempMax);
//     tempMax = -Infinity;
//     i++;
//     j++;
//   }
//   return ans;
// };

var maxSlidingWindow = function (nums, k) {
  let i = 0;
  let j = k - 1;
  let tempMax = -Infinity;
  let ans = [];
  while (j < nums.length) {
    while (i < j) {
      tempMax = Math.max(tempMax, nums[i]);
      i++;
    }
    ans.push(tempMax);
    j++;
  }
  return ans;
};

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
console.log(maxSlidingWindow([1, -1], 1));
