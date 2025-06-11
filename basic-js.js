/*
 Question 1 Sum of all natural numbers from 1 to n 

*/

function sumOfNaturalNumbers(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}
// console.log(sumOfNaturalNumbers(5));
