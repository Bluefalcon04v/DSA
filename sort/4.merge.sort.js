/*
Problem - Given an array of integers, sort the array.

const arr = [-6, 20, 10, 40, -2]

it should return [-6, -2, 10, 20, 40]
*/

function mergeSort(arr) {
  if (arr.length < 2) return arr;
  let mid = Math.floor(arr.length / 2);
  let leftArr = arr.slice(0, mid);
  let rightArr = arr.slice(mid);
  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
  let temp = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) temp.push(leftArr.shift());
    else temp.push(rightArr.shift());
  }
  return [...temp, ...leftArr, ...rightArr];
  
}

// console.log(mergeSort([2, 4, 10, 6, 9]));

// time Complexity  O(n logn)
