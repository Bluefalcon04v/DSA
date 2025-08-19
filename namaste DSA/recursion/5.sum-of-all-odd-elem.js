/*
 Find the sum of all odd elements of an array
*/

function sumOfOddElem(arr) {
  let isOdd = arr[0] % 2 != 0;
  if (arr.length == 0) return 0;
  if (isOdd) {
    return arr[0] + sumOfOddElem(arr.slice(1));
  } else {
    return 0 + sumOfOddElem(arr.slice(1));
  }
}

// console.log(sumOfOddElem([4, 2, 1, 7, 3, 5, 4]));
