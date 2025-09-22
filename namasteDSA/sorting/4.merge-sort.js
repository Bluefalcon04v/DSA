/*=============================================
// ?            code of the merge Sort            
=============================================*/

function mergeSort(arr) {
  if (arr.length == 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let leftArr = mergeSort(arr.slice(0, mid));
  let rightArr = mergeSort(arr.slice(mid, arr.length));
  return merge(leftArr, rightArr);
}

/*=============================================
// ?            Merging two arrays            
=============================================*/

function merge(left, right) {
  let result = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  return [...result, ...left, ...right];
}

// console.log(mergeSort([4, 2, 1, 5, 6, 7, 10, 8, 12]));
