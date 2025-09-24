/*
503. Next Greater Element II

Given a circular integer array nums (i.e., the next element of nums[nums.length - 1] is nums[0]), return the next greater number for every element in nums.

The next greater number of a number x is the first greater number to its traversing-order next in the array, which means you could search circularly to find its next greater number. If it doesn't exist, return -1 for this number.

Example 1:
Input: nums = [1,2,1]
Output: [2,-1,2]
Explanation: The first 1's next greater number is 2; 
The number 2 can't find next greater number. 
The second 1's next greater number needs to search circularly, which is also 2.

Example 2:
Input: nums = [1,2,3,4,3]
Output: [2,3,4,-1,4]

*/

function nextGreatestElement(nums) {
  let arr = [...nums];
  for (let i = 0; i < nums.length; i++) {
    arr.push(nums[i]);
  }
  let res = [];
  let stack = [];
  stack.push(arr[arr.length - 1]);
  res[arr.length - 1] = 0;

  for (let i = arr.length - 2; i >= 0; i--) {
    if (stack[stack.length - 1] > arr[i]) {
      res[i] = stack[stack.length - 1];
      stack.push(arr[i]);
    } else {
      while (stack[stack.length - 1] <= arr[i]) {
        stack.pop();
      }
      if (stack.length === 0) {
        res[i] = -1;
        stack.push(arr[i]);
      } else {
        res[i] = stack[stack.length - 1];
        stack.push(arr[i]);
      }
    }
  }
  return res.splice(0, nums.length);
}

// function nextGreatestElement(nums) {
//   let res = [];
//   let stack = [];
//   let arr = [...nums, ...nums];
//   stack.push(arr[arr.length - 1]);
//   res = Array(n).fill(-1);

//   for (let i = arr.length - 2; i >= 0; i--) {
//     while (stack.length) {
//       let top = stack[stack.length - 1];
//       if (top >= arr[i]) {
//         res[i] = top;
//         break;
//       } else {
//         stack.pop();
//       }
//     }
//     stack.push(arr[i]);
//   }
//   return res.splice(0, nums.length);
// }

// console.log(nextGreatestElement([1, 2, 1]));
console.log(nextGreatestElement([1, 2, 3, 4, 3]));
