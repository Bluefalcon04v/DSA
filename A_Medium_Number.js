var input = require("fs").readFileSync(0, "utf8").trim().split(/\s+/);
var n = +input[0];
var inp = input.slice(1).map(Number);

for (let i = 0; i < n; i++) {
  let a = inp[3 * i];
  let b = inp[3 * i + 1];
  let c = inp[3 * i + 2];
  console.log(mediumNumber(a, b, c));
}

function mediumNumber(a, b, c) {
  if (a < b && b > c) {
    if (a > c) return a;
    else return c;
  }
  if (b < a && a > c) {
    if (b > c) return b;
    else return c;
  } else {
    if (a > b) return a;
    else return b;
  }
}
