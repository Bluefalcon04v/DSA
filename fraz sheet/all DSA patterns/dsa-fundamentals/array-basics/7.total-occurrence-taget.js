/*
Count Occurrences of a Target Number in an Array

Input
    Array: [1, 2, 3, 2, 4, 2, 5]
    Target: 2  
    Expected Count: 3

Input 
    Array: [10, 20, 30, 40]
    Target: 30  
    Expected Count: 1

Input 
    Array: [5, 6, 7, 8]
    Target: 9  
    Expected Count: 0

Input
    Array: [3, 3, 3, 3]
    Target: 3  
    Expected Count: 4

Input 
    Array: [1, "1", 1, "1"]
    Target: 1  
    Expected Count: 2
 */

function occurrencesTarget(nums, target) {
  let totalOcc = 0;
  for (let i of nums) {
    if (i === target) {
      totalOcc++;
    }
  }
  return totalOcc;
}

// console.log(occurrencesTarget([1, 2, 3, 2, 4, 2, 5], 2));
// console.log(occurrencesTarget([5, 6, 7, 8], 2));
// console.log(occurrencesTarget([2, 2, 2, 2, 2], 2));
// console.log(occurrencesTarget([1, "1", 1, "1"], 1));
