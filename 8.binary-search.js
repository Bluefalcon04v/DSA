/* 
Problem - Given an sorted array of 'n' elements and a target element 't', find the index of 't' in the array Return -1 if the target element is not found.

arr[-5,4,6,8,10], t= 4 -> should return 1
arr[-5,4,6,8,10], t= 10 -> should return 4
arr[-5,4,6,8,10], t= 20 -> should return -1

*/

function binarySearch(array, target) {
  firstIndex = 0;
  lastIndex = array.length - 1;
  while (firstIndex <= lastIndex) {
    let middleIndex = Math.floor((firstIndex + lastIndex) / 2);
    if (array[middleIndex] === target) return middleIndex;
    else if (array[middleIndex] < target) {
      firstIndex = middleIndex + 1;
    } else {
      lastIndex = middleIndex - 1;
    }
  }
  return -1;
}

// console.log(binarySearch([-5, 4, 6, 8, 10], 10));
// console.log(binarySearch([-5, 4, 6, 8, 10], -5));
// console.log(binarySearch([-5, 4, 6, 8, 10], 40));

// Big-O O(log(n))
