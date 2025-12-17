/*
40. Combination Sum II
Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.
Each number in candidates may only be used once in the combination.
Note: The solution set must not contain duplicate combinations.
 
Example 1:
Input: candidates = [10,1,2,7,6,1,5], target = 8
Output: 
[
[1,1,6],
[1,2,5],
[1,7],
[2,6]
]

Example 2:
Input: candidates = [2,5,2,1,2], target = 5
Output: 
[
[1,2,2],
[5]
]

*/

function combinationSums(nums, target) {
  let result = [];
  nums.sort((a, b) => a - b);
  function tracking(remainingSum, path, start) {
    if (remainingSum === 0) {
      result.push([...path]);
      return;
    }
    if (remainingSum < 0) return;

    for (let i = start; i < nums.length; i++) {
      if (i > start && nums[i - 1] === nums[i]) continue;
      path.push(nums[i]);
      tracking(remainingSum - nums[i], path, i + 1);
      path.pop();
    }
  }

  tracking(target, [], 0);
  return result;
}

// console.log(combinationSums([10, 1, 2, 7, 6, 1, 5], 8));
