/* 
Problem - Give a positive integer 'n', determine if the number is a power of 2 or not 

An integer is a power of two if there exists an integer 'x' such that 'n' === 2^x

isPowerOfTwo(1) = true  2^0
isPowerOfTwo(2) = true  2^1
isPowerOfTwo(5) = false 
*/

function isPowerOfTwo(num) {
  while (num > 1) {
    if (num % 2 !== 0) {
      return false;
    }
    num = num / 2;
  }
  return true;
}

// console.log(isPowerOfTwo(1));
// console.log(isPowerOfTwo(2));
// console.log(isPowerOfTwo(5));
