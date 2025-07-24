/*
Problem Print Each Element and Its Index in an Array

Input arr = [10, 20, 30, 40]
Output 
        Index 0: 10
        Index 1: 20
        Index 2: 30
        Index 3: 40
*/

function printElemAndIndex(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push("index " + i + " : " + arr[i]);
  }
  return res.join("\n");
}
// console.log(printElemAndIndex([10, 2, 5, 50]));
