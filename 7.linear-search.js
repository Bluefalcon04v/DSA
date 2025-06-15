/* 
Problem - Given an array of 'n' elements and a target element 't', find the index of 't' in the array Return -1 if the target element is not found.

arr[-5,4,3,2,10], t= 4 -> should return 1
arr[-5,4,3,2,10], t= 10 -> should return 4
arr[-5,4,3,2,10], t= 20 -> should return -1

*/

function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) return i;
  }
  return -1;
}

console.log(linearSearch([10, 4, 1, 20, 3], 20));
