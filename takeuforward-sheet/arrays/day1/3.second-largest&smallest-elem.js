/*
Find Second Smallest and Second Largest Element in an array

Problem Statement: Given an array, find the second smallest and second largest element in the array. Print ‘-1’ in the event that either of them doesn’t exist.

Example 1:
Input: [1,2,4,7,7,5]
Output:
    Second Smallest : 2
	Second Largest : 5
    
Explanation: The elements are as follows 1,2,3,5,7,7 and hence second largest of these is 5 and second smallest is 2


Example 2:
Input: [1]
Output: 
    Second Smallest : -1
	Second Largest : -1

Explanation: Since there is only one element in the array, it is the largest and smallest element present in the array. There is no second largest or second smallest element present.
*/

function largestSmallestElem(arr) {
  if (arr.length < 2) return -1;
  let sortedArr = sortingArr(arr);

  let i = 0;
  while(i < )
}

function sortingArr(arr) {
  if (arr.length < 2) return arr;
  let mid = Math.floor(arr.length / 2);

  let leftArr = arr.slice(0, mid);
  let rightArr = arr.slice(mid);
  return mergingArr(sortingArr(leftArr), sortingArr(rightArr));
}

function mergingArr(leftArr, rightArr) {
  let temp = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) temp.push(leftArr.shift());
    else temp.push(rightArr.shift());
  }

  return [...temp, ...leftArr, ...rightArr];
}

// console.log(largestSmallestElem([1]));
console.log(largestSmallestElem([1, 2, 4, 7, 7, 5]));
