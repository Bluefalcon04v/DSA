/*
Print Alternate Elements of an Array

Input: [1,[2][3][4]
Expected Output: 1 3

Input: [7]
Expected Output: 7

Input: ['a', 'b', 'c', 'd']
Expected Output: a c
*/

function alternateArray(arr) {
  return arr.filter((_, i) => i % 2 === 0).join("\n");
}

console.log(alternateArray([1, 2, 3]));
console.log(alternateArray([5, 10, 3, 2]));
console.log(alternateArray([]));
