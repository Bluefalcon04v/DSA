/*
Problem - Given an array of integers, sort the array.

const arr = [-6, 20, 10, 40, -2]

it should return [-6, -2, 10, 20, 40]
*/

function bubbleSort(array) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        let temp = array[i + 1];
        array[i + 1] = array[i];
        array[i] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return array;
}

// console.log(bubbleSort([-6, 10, 4, 12, 20]));

// Big-O = O(n^2)
