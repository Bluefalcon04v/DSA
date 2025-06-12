/* FIBONACCI SEQUENCE
Problem - Give a number 'n' find the first 'n' elements of the fibonacci sequence 

fibonacci(2) => [0, 1]
fibonacci(3) => [0,1,1]
fibonacci(6) => [0,1,1,2,3,5]

*/

function fibonacci(num) {
  let fib = [0, 1];
  if (num === 0) {
    return [];
  } else if (num === 1) return [0];
  else
    for (let i = 2; i < num; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
  return fib;
}

// console.log(fibonacci(4));
