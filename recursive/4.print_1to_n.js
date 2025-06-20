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
  let result = [n, ...print_n_to_1(n - 1)];
  //   result.unshift(n);
  return result;
}

// console.log(print_n_to_1(10));

// ---------------------------------------------------------------------------------------------------------- Print all even numbers from 1 to N

// function evenNumber_1_to_n(params) {
    
// }



