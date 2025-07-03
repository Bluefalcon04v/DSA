/*
Problem - Given a staircase of 'n' steps, count the number of distinct ways to climb to the top. 

You can either climb 1 step or 2 steps at a time. 

Example

n = 1, climbingStaircase(1) = 1     | (1)

n = 2, climbingStaircase(2) = 2     | (1, 1) and (2)


n = 3, climbingStaircase(3) = 3     | (1, 1, 1) and (1, 2) and (2,1)

n = 4, climbingStaircase(4) = 5     | (1, 1, 1, 1) and (1, 1, 2) and (1, 2, 1) and (2, 1, 1) and (2, 2)
*/

function climbingStaircase(n) {
  if (n <= 2) return n;
  return climbingStaircase(n - 1) + climbingStaircase(n - 2);
} //O(n^2)

function optimizedSolution(n) {
  const numberOfWays = [1, 2];
  for (let i = 2; i <= n; i++) {
    numberOfWays[i] = numberOfWays[i - 1] + numberOfWays[i - 2];
  }
  return numberOfWays[n - 1];
} // O(n)

// console.log(climbingStaircase(0));
// console.log(climbingStaircase(1));
// console.log(climbingStaircase(2));
// console.log(climbingStaircase(3));
// console.log(climbingStaircase(4));
