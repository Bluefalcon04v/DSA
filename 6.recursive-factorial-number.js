/*
Problem - Give an integer 'n', find the factorial of that integer
*/

function recursiveFactorialNumber(num) {
  if (num < 1) return 1;

  let fact = 1;
  while (num > 1) {
    fact = fact * num;
    num--;
  }
  return fact
}


console.log(recursiveFactorialNumber(5))