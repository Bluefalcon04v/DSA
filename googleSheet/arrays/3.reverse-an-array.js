/*
Problem: Reverse an array
Note: without taking any new array
*/

function reverseAnArray(arr) {
  let temp;
  for (let i = 1; i <= Math.floor(arr.length / 2); i++) {
    temp = arr[i - 1];
    arr[i - 1] = arr[arr.length - i];
    arr[arr.length - i] = temp;
  }
  return arr;
}

// console.log(reverseAnArray([4, 10, 2, 5]));
// console.log(reverseAnArray([3, 1, 4]));
// console.log(reverseAnArray([-3, 10, -2, 5, 7, 9]));
