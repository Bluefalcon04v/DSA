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
  if (n < 2) return [];
  if (n % 2 !== 0) return evenNumber_1_to_n(n - 1);
  let result = evenNumber_1_to_n(n - 1);
  result.push(n);
  return result;
}

// console.log(evenNumber_1_to_n(10));

// ---------------------------------------------------------------------------------------------------------- Print all even numbers from N to 1

function evenNumber_n_to_1(n) {
  if (n < 2) return [];
  if (n % 2 !== 0) return evenNumber_n_to_1(n - 1);
  let result = evenNumber_n_to_1(n - 1);
  result.unshift(n);
  return result;
}

// console.log(evenNumber_n_to_1(20));



































//---------------------------------------------------------------------------------------------------------- Print each digit of a number (e.g., 123 → 1, 2, 3)
function eachDigitOfNumber(n){

  for(let i = 0; i< n.toString().length; i++){
      let result = []
      result.push(n)
    }
    return result
  // let length = n.toString().length;
  // if (length < 1) return n
  // let result = eachDigitOfNumber(n % ( 10*length))
  // return result
}

console.log(eachDigitOfNumber(125))