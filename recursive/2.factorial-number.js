/*
Problem - Give an integer 'n', find the factorial of that integer
using recursion
*/

function recursiveFactorialNumber(num) {
  if (num === 0) return 1;
  return num * recursiveFactorialNumber(num - 1);
}

// console.log(recursiveFactorialNumber(5));
