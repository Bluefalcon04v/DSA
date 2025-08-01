function reverseNumber(n) {
  let reverse = 0;
  while (n > 0) {
    last = n % 10;
    reverse = 10 * reverse + last;
    n = Math.floor(n / 10);
  }

  //   console.log(reverse);
}

reverseNumber(123112);
