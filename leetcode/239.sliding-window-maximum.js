/* 239. Sliding Window Maximum
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

// Time Complexity = O(n), Space Complexity = O(k)
var maxSlidingWindow = function (nums, k) {
  let i = (j = 0);
  let ans = [];
  let queue = [];
  while (j < nums.length) {
    // removing the element from the queue if last elem of queue is smaller than nums[j]
    while (queue.length && queue[queue.length - 1] < nums[j]) queue.pop();
    queue.push(nums[j]);
    if (j >= k - 1) {
      ans.push(queue[0]);
      // removing the element from the queue because it do not exists in the window size
      if (queue[0] === nums[i]) queue.shift();
      i++;
    }
    j++;
  }
  return ans;
};
// console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
// console.log(maxSlidingWindow([1, -1], 1));
