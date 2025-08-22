// ---------------------------------------------------------------------------------------------------------- Print numbers from  1 to N

function print_1_to_n(n) {
  if (n < 1) return [];
  let result = print_1_to_n(n - 1);
  result.push(n);
  return result;
}
// console.log(print_1_to_n(20));

// ---------------------------------------------------------------------------------------------------------- Print numbers from N to 1

function print_n_to_1(n) {
  if (n < 1) return [];
  let result = print_n_to_1(n - 1);
  result.unshift(n);
  return result;
}

// console.log(print_n_to_1(10));

// ---------------------------------------------------------------------------------------------------------- Print all even numbers from 1 to N

function evenNumber_1_to_n(n) {
  if (n <= 1) return;
  evenNumber_1_to_n(n - 1);
  if (n % 2 == 0) console.log(n);
}

// evenNumber_1_to_n(10);

// ---------------------------------------------------------------------------------------------------------- Print all even numbers from N to 1

function evenNumber_n_to_1(n) {
  if (n <= 1) return;
  if (n % 2 == 0) console.log(n);
  evenNumber_n_to_1(n - 1);
}

// evenNumber_n_to_1(20);

// -------------------------------------------------------------------------------------- Print each digit of a number (e.g., 123 → 1, 2, 3)

function eachDigitOfNumber(n) {
  if (n < 10) return [n];
  let digits = eachDigitOfNumber(Math.floor(n / 10));
  digits.push(n % 10);
  return digits;
}

// console.log(eachDigitOfNumber(1258));

// -------------------------------------------------------------------------------------- The sum of digits of a number (e.g. 1001 => 1+0+0+1 => 2)
function sumOfDigit(n) {
  if (n < 10) return n;
  let sum = n % 10;
  return sum + sumOfDigit(Math.floor(n / 10));
}

// console.log(sumOfDigit(1011));

// ----------------------------------------------------------------------------------------------------------Self Dividing Numbers
// Input: left = 1, right = 22
// Output: [1,2,3,4,5,6,7,8,9,11,12,15,22]

function selfDividingNumber(left, right) {
  let result = [];
  for (let i = left; i <= right; i++) {
    let tempVar = i;
    let isDivide = true;
    while (tempVar > 0) {
      let digit = tempVar % 10;
      if (digit === 0 || i % digit !== 0) {
        isDivide = false;
        break;
      }
      tempVar = Math.floor(tempVar / 10);
    }
    if (isDivide) {
      result.push(i);
    }
  }
  return result;
}

// console.log(selfDividingNumber(1,22));

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
