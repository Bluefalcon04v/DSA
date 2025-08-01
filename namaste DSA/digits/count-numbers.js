// to count the number of digits and remove the last digits

function countNumber(n) {
  let count = 0;
  n = Math.abs(n);
  while (n > 0) {
    n = Math.floor(n / 10); // to count the number of digits and remove the last digits
    count++;
  }
  console.log(count);
}

// countNumber(12314);
