/*
Problem - Give a number 'n', find the nth element of the fibonacci sequence

fib = [0,1,1,2,3,5,8]

recursiveFibonacci(0) = 0
recursiveFibonacci(1) = 1
recursiveFibonacci(6) = 8

*/

function iterativeFibonacci(num) {
  fib = [0, 1];
  if (num < 2) return fib[num];
  for (let i = 2; num >= fib.length; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib[num];
}

console.log(iterativeFibonacci(0));
console.log(iterativeFibonacci(1));
console.log(iterativeFibonacci(6));

function recursiveFibonacci(n) {
  if (n < 2) return n;
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}


console.log(recursiveFibonacci(0));
console.log(recursiveFibonacci(1));
console.log(recursiveFibonacci(6));