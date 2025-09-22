//  to get the number of last digit

function lastDigits(n) {
  while (n > 0) {
    let lastNum = n % 10; // to get the number of last digit
    console.log(lastNum);
    n = Math.floor(n / 10);
  }
}

// lastDigits(12312);
