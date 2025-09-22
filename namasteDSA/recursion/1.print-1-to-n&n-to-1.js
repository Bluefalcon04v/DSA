// -------------------------------------------------- Print 1 to N
function print1ToN(n) {
  if (n < 1) return;
  print1ToN(n - 1);
  console.log(n);
}

// print1ToN(5);

// -------------------------------------------------- Print N to 1

function printNTo1(n) {
  if (n < 1) return;
  console.log(n);
  printNTo1(n - 1);
}

// printNTo1(5);
