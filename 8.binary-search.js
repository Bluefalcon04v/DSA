/* 
Problem - Given an sorted array of 'n' elements and a target element 't', find the index of 't' in the array Return -1 if the target element is not found.

arr[-5,4,6,8,10], t= 4 -> should return 1
arr[-5,4,6,8,10], t= 10 -> should return 4
arr[-5,4,6,8,10], t= 20 -> should return -1

*/

function binarySearch(array, target) {
  let index = 0;
  let forward = 0;
  let last = array.length;

  console.log(array.length)

//   for(let i= 0; i< )
//   if (array[index] === target) return index;
//   else if (array[index] < target) return (forward = index);
//   else if (array[index] > target) return (last = index);
//   else return -1;
}

console.log(binarySearch([-5, 4, 6, 8, 10], 4));
// console.log(binarySearch([-5, 4, 6, 8, 10], 6));
// console.log(binarySearch([-5, 4, 6, 8, 10], 40));
