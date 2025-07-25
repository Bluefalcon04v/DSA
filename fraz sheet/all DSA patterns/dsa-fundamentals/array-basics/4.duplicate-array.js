/*
Create a Duplicate of an Array

Input arr = [1, 2, 3, 4, 5]
output = [1, 2, 3, 4, 5]
*/

function duplicateArray(arr) {
  let duplicate = [];
  for (let i of arr) {
    duplicate.push(i);
  }
  return duplicate;
}

// console.log(duplicateArray([1, 2, 3, 4, 5]));
