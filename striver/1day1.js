// Input: arr[] = {2,5,1,3,0};
// Output: 5
// Explanation: 5 is the largest element in the array.

function largestElemOfArr(arr) {
  let largest = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

// console.log(largestElemOfArr([2, 5, 1, 3, 0]));
// console.log(largestElemOfArr([8, 10, 5, 7, 9]));
