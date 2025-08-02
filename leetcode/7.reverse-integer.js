function reverseInteger(n) {
  let rev = 0;
  let copyN = n;
  n = Math.abs(n);
  while (n > 0) {
    lastDigit = n % 10;
    rev = 10 * rev + lastDigit;
    n = Math.floor(n / 10);
  }
  let limit = Math.pow(2, 31);
  if (rev < -limit || rev > limit) return 0;

  return copyN < 0 ? -rev : rev;
}

console.log(reverseInteger(12312));
