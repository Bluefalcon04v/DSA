var input = require("fs")
  .readFileSync(0, "utf8")
  .trim()
  .split(/\s+/)
  .map(Number);

function nextRound(n, k, arr) {
  let res = 0;
  let kthElm = arr[k - 1];

  for (let i = 0; i <= n; i++) {
    if (arr[i] > 0 && arr[i] >= kthElm) {
      res++;
    }
  }
  console.log(res)
}

const [n, k, ...arr] = input;
nextRound(n, k, arr);
