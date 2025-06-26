/*
Problem - Given an array of integers, sort the array.

const arr = [-6, 20, 10, 40, -2]

it should return [-6, -2, 10, 20, 40]
*/

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let numberInsert = arr[i];
    let j = i - 1; //to loop in second array from right to left
    while (j >= 0 && arr[j] > numberInsert) { // only when the j > than number to Insert
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = numberInsert; // reassigning the number in the array  
  }
  return arr;
}

// console.log(insertionSort([4, 6, 1, -8, 2]));
             