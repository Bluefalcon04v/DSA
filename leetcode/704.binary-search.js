//? Recursive method
function binSearch(arr, target) {
  return binary(arr, 0, arr.length - 1, target);
}

function binary(arr, left, right, target) {
  let mid = Math.floor((right + left) / 2);
  if (left > right) return -1;
  else if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] > target) {
    return binary(arr, left, mid - 1, target);
  } else {
    return binary(arr, mid + 1, right, target);
  }
}

// console.log(binSearch([-1, 0, 3, 5, 9, 12], 6));

//? Looping Method
function binSearch(arr, target) {
  let [left, right] = [0, arr.length - 1];

  while (right >= left) {
    let mid = Math.floor((right + left) / 2);
    if (arr[mid] == target) return mid;
    else if (arr[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}

console.log(binSearch([-1, 0, 3, 5, 9, 12], 0));
