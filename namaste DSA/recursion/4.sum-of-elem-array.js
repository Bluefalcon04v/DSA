/*
Sum of elem of array
*/

function sumOfElemArray(arr) {
  if (arr.length == 0) return 0;
  return arr[0] + sumOfElemArray(arr.slice(1));
}

// console.log(sumOfElemArray([4, 3, 1, 2]));
