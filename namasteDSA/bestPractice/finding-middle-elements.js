let left = 10;
let right = 20;

// do this to let not get memory overflow
let middle = left + (right - left) / 2;

// instead this
middle = (left + right) / 2;

// console.log(middle);
