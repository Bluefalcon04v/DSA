// sorting in ascending

let arr = [4, 10, 3, 5, 1];

function heapSort(arr) {
  let n = arr.length;
  //create a max heap
  for (let i = n - 1; i >= 0; i--) {
    heapifyDown(arr, i, n);
  }

  for (let i = n - 1; i > 0; i--) {
    [arr[i], arr[0]] = [arr[0], arr[i]];
    heapifyDown(arr, 0, i);
  }

  return arr;
}

function heapifyDown(arr, i, n) {
  let largest = i;

  let left = 2 * i + 1;
  let right = 2 * i + 2;

  if (left < n && arr[largest] < arr[left]) {
    largest = left;
  }

  if (right < n && arr[largest] < arr[right]) {
    largest = right;
  }

  if (i !== largest) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapifyDown(arr, largest, n);
  }
}

// console.log(heapSort([4, 10, 3, 5, 1]));
