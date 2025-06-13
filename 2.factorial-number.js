/* FACTORIAL NUMBER
Problem - Give an integer 'n', find the factorial of that integer 

factorial(4) = 4*3*2*1 = 24
factorial(5) = 4*3*2*1 = 120

*/

function factorial(num) {
  let total = 1;
  for (let i = 1; i <= num; i++) {
    total = total * i;
  }

  return total;
}

function factorial2(num) {
  if (num < 1) return 1;

  let fact = 1;
  while (num > 1) {
    fact = fact * num;
    num--;
  }
  return fact;
}

// console.log(factorial(0)); // 1
// console.log(factorial(1)); // 1
// console.log(factorial(4)); // 24
// console.log(factorial(5)); // 120

// Big-O = O(n)
