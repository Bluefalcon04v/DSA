/*
771. Jewels and Stones

You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.
Letters are case sensitive, so "a" is considered a different type of stone from "A".

Example 1:
Input: jewels = "aA", stones = "aAAbbbb"
Output: 3

Example 2:
Input: jewels = "z", stones = "ZZ"
Output: 0
*/

// Approach 1 (Using two for loops) T = O(n * m), S = O(1)
function numJewelsInStones(jewels, stones) {
  let count = 0;
  let i = 0;
  while (i < jewels.length) {
    for (let j = 0; j < stones.length; j++) {
      if (jewels[i] === stones[j]) {
        count++;
      }
    }
    i++;
  }

  return count;
}

// Approach 2 (Using set) T = O(n), S = O(m)

function numJewelsInStones2(jewels, stones) {
  let set = new Set();

  for (let i = 0; i < jewels.length; i++) {
    set.add(jewels[i]);
  }
  let count = 0;
  for (let j = 0; j < stones.length; j++) {
    if (set.has(stones[j])) {
      count++;
    }
  }
  return count;
}

// console.log(numJewelsInStones("aA", "aAAbbb"));
