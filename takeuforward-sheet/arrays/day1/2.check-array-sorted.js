/*
Check if an Array is Sorted
Problem Statement: Given an array of size n, write a program to check if the given array is sorted in (ascending / Increasing / Non-decreasing) order or not. If the array is sorted then return True, Else return False.
Note: Two consecutive equal values are considered to be sorted.

Example 1:
Input: N = 5, array[] = {1,2,3,4,5}
Output: True.
Explanation: The given array is sorted i.e Every element in the array is smaller than or equals to its next values, So the answer is True.

*/

function arrayIsSorted(arr) {
  let lowestNum = lowestNumIndex(arr);
  console.log(lowestNum);
}

function lowestNumIndex(arr) {
  for (let i = 0; i < arr.length; ) {
    // if (arr[i] < arr[i + 1]) {
    //    console.log( arr[i] < arr[i + 1])
    //   i++;
    // }
 console.log(i)
    return i+1;
  }
}

console.log(arrayIsSorted([3, 4, 5, 1, 2]));
console.log(arrayIsSorted([2, 1, 3, 4]));
console.log(arrayIsSorted([1, 2, 3]));
