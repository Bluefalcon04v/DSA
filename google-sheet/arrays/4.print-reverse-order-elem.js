/*
Problem Print elements in reverse order
*/

function printReverseElem(arr) {
  let i = 0;
  while ((i = arr.length)) {
    console.log(arr.pop());
    i++;
  }
}

// printReverseElem([2, 12, 4, 5, 9, 4]);
// printReverseElem([4, 10, 2, 5]);
// printReverseElem([3, 1, 4]);
// printReverseElem([-3, 10, -2, 5, 7, 9]);
