/* Medium Leetcode Question 17 
Problem - Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

Example 1:

Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
Example 2:

Input: digits = ""
Output: []
Example 3:

Input: digits = "2"
Output: ["a","b","c"]
*/

// ------------------------------ Backtracking
function cartesianProduct(nums) {
  let letters = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  let result = [];
  function backtracking(path, start) {
    if (start === nums.length) {
      result.push(path.join(""));
      return;
    }
    let choices = letters[nums[start]];

    for (let i = 0; i < choices.length; i++) {
      path.push(choices[i]);
      backtracking(path, start + 1);

      path.pop();
    }
  }
  backtracking([], 0);
  return result;
}

function cartesianProduct(num) {
  if (num === "") return [];
  const mobileKeys = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  let numberArray = [];

  for (let i of num) {
    if (mobileKeys[i]) numberArray.push(mobileKeys[i]);
  }

  const [firstElem, ...rest] = numberArray;

  return joiningArray(firstElem, rest);
}

function joiningArray(firstElem, rest) {
  if (rest.length === 0) return firstElem;
  const next = joiningArray(rest[0], rest.slice(1));

  let result = [];

  for (let ch of firstElem) {
    for (let combo of next) {
      result.push(ch + combo);
    }
  }

  return result;
}

// console.log(cartesianProduct("32"));
