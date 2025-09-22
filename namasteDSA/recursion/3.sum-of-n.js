/*
    find the sum of n 
*/

function sumOfN(n) {
  if (n < 1) return 0;
  return n + sumOfN(n - 1);
}

// console.log(sumOfN(5)); // Output 15
