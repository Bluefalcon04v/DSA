/*
78. Subset
Given an integer array nums of unique elements, return all possible subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

 

Example 1:

Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
Example 2:

Input: nums = [0]
Output: [[],[0]]

*/

function subSets(nums) {
  let result = [];

  function backtrack(path, index) {
    result.push([...path]);
    for (let i = index; i < nums.length; i++) {
      path.push(nums[i]);
      backtrack(path, i + 1);
      path.pop();
    }
  }

  backtrack([], 0);
  return result;
}

// console.log(subSets([1, 2, 3])); //  [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
