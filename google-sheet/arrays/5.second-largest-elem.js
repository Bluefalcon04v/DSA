/*
Problem: Find the second largest element of an array
*/

function secondLargestElem(array) {
  if (array.length < 1) return -1;
  let temp = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > temp) {
      temp = array[i];
    }
  }
  return temp;
}

console.log(secondLargestElem([4, 10, 2, 5]));
console.log(secondLargestElem([3, 1, 4]));
console.log(secondLargestElem([3, 1]));
console.log(secondLargestElem([-3, 10, -2, 5, 7, 9]));
