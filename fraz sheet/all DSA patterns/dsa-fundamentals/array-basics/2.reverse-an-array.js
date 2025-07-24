/*
Problem Statement: You are given an array. The task is to reverse the array and print it. 

Examples:

Example 1:
Input: N = 5, arr[] = {5,4,3,2,1}
Output: {1,2,3,4,5}
Explanation: Since the order of elements gets reversed the first element will occupy the fifth position, the second element occupies the fourth position and so on.

Example 2:
Input: N=6 arr[] = {10,20,30,40}
Output: {40,30,20,10}
Explanation: Since the order of elements gets reversed the first element will occupy the fifth position, the second element occupies the fourth position and so on.

*/

function reverseArray(arr) {
  let leftInd = 0;
  let rightInd = arr.length - 1;
  while (leftInd < rightInd) {
    [arr[leftInd], arr[rightInd]] = [arr[rightInd], arr[leftInd]];
    leftInd++;
    rightInd--;
  }
  return arr;
}

// console.log(reverseArray([5, 3, 2, 1, 9]));
// console.log(reverseArray([-1, 0, 7, -8, 15]))
