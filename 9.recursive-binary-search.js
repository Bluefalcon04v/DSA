/* 
Problem - Given an sorted array of 'n' elements and a target element 't', find the index of 't' in the array Return -1 if the target element is not found.

arr[-5,4,6,8,10], t= 4 -> should return 1
arr[-5,4,6,8,10], t= 10 -> should return 4
arr[-5,4,6,8,10], t= 20 -> should return -1

*/

function recursiveBinarySearch(array, target) {
  return search(array, target, 0, array.length - 1);
}

function search(array, target, firstIndex, lastIndex) {
  let middleIndex = Math.floor((firstIndex + lastIndex) / 2);
  if (firstIndex > lastIndex) return -1;
  else if (array[middleIndex] === target) return middleIndex;
  else if (array[middleIndex] < target)
    return search(array, target, middleIndex + 1, lastIndex);
  else if (array[middleIndex] > target)
    return search(array, target, 0, middleIndex - 1);
}

console.log(recursiveBinarySearch([-5, 4, 6, 8, 10], 0));
