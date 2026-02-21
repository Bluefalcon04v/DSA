var input = require("fs").readFileSync(0, "utf8").trim().split(/\s+/);

var n = +input[0];
var arr = input.slice(1).map(Number);

function choosingTeamProject(n, nums) {
  let out = 0;
  let j = 0;
  for (let i = 0; i < n; i++) {
    let count = 0;
    let yesVotes = 0;
    while (count < 3) {
      if (nums[j] === 1) {
        yesVotes++;
      }
      count++;
      j++;
    }
    if (yesVotes >= 2) {
      out++;
    }
  }
  console.log(out);
}

choosingTeamProject(n, arr);
