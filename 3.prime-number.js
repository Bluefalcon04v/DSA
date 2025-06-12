/* PRIME NUMBER
Problem- Given a natural number 'n', determine if the number is prime or not

isPrime(5) = true (1*5 or 5*1)
isPrime(4) = false (1*4 or 2*2 or 4*1)

*/

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(1)); // false
console.log(isPrime(2)); // true
console.log(isPrime(3)); // true
console.log(isPrime(4)); // false
console.log(isPrime(5)); // true
console.log(isPrime(6)); // false
console.log(isPrime(7)); // true
console.log(isPrime(8)); // false
