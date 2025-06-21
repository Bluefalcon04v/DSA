// ----------------------------------------------------------------------------------------------------------------------- Return the sum of numbers from 1 to N

function sumOfnum_1_to_n(n) {
  if (n < 1) return n;
  return n + sumOfnum_1_to_n(n - 1);
}

// console.log(sumOfnum_1_to_n(3));

// ----------------------------------------------------------------------------------------------------------------------- Return the factorial of N
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

// console.log(factorial(5));

// -----------------------------------------------------------------------------------------------------------------------  Return the N-th Fibonacci number

// function nthFactorial(n) {
//   let arr = [0, 1];
//   if (n <= 1) return n;
//   return nthFactorial(n - 1) + nthFactorial(n - 2);
// }

// console.log(nthFactorial(4));
