/*
Problem: Find the second largest element of an array
*/

function secondLargestElem(arr) {
  if (arr.length < 2) return -1;
  let [temp, secondGreatest] = [-Infinity, -Infinity];
  for (let i of arr) {
    if (i > temp) [secondGreatest, temp] = [temp, i];
    else if (i > secondGreatest && i < temp) secondGreatest = i;
  }

  return secondGreatest;
}

// console.log(secondLargestElem([4, 10, 2, 5]));
// console.log(secondLargestElem([3, 1, 4]));
// console.log(secondLargestElem([3, 1]));
// console.log(secondLargestElem([3, 3, 3]));
// console.log(secondLargestElem([10, 10, 9, 9]));
// console.log(secondLargestElem([9, 9, 10, 10]));
// console.log(secondLargestElem([9, 10, 9, 10, 10, 10]));
// console.log(secondLargestElem([10, 10, 9]));
