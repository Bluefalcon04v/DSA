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

// ----------------------------------------------------------------------------------------------------------------------- Factorial

function printFactorial(n) {
  if (n <= 1) return 1;
  return n * printFactorial(n - 1);
}

// console.log(printFactorial(10));

// ----------------------------------------------------------------------------------------  Count how many times a digit (e.g., 7) appears in a number

function sevenAppears(n) {
  if (n < 1) return 0;
  let lastDigit = n % 10;
  let counter = lastDigit == 7 ? 1 : 0;
  return counter + sevenAppears(Math.floor(n / 10));
}

// console.log(sevenAppears(177271));

// -------------------------------------------------------------------------------------- The sum of digits of a number (e.g. 1001 => 1+0+0+1 => 2)
function sumOfDigit(n) {
  if (n < 10) return n;
  let sum = n % 10;
  return sum + sumOfDigit(Math.floor(n / 10));
}

// console.log(sumOfDigit(1011));
