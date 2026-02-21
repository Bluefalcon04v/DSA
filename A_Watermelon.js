var input = Number(require("fs").readFileSync(0, "utf8").trim().split(/\s+/));

function divideWaterMellon(n) {
  if (n <= 2) console.log("NO");
  else {
    let isEven = n % 2 === 0;
    console.log(isEven ? "YES" : "NO");
  }
}

divideWaterMellon(input);
