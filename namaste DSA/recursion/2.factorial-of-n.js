/*

n = 5
5*4*3*2*1 = 120

*/

function factorialOf(n) {
  if (n < 1) return 1;
  return n * factorialOf(n - 1);
}

// console.log(factorialOf(5));
