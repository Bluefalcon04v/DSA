/*
199. Binary Tree Right Side View
Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

Example 1:
Input: root = [1,2,3,null,5,null,4]
Output: [1,3,4]

Example 2:
Input: root = [1,2,3,4,null,null,null,5]
Output: [1,3,4,5]

Example 3:
Input: root = [1,null,3]
Output: [1,3]

Example 4:
Input: root = []
Output: []

*/

var rightSideView = function (root) {
  if (!root) return [];
  let temp = [];
  let ans = [];
  let traversal = (curr, level) => {
    if (!temp[level]) temp[level] = [];
    temp[level].push(curr.val);
    curr.right && traversal(curr.right, level + 1);
    curr.left && traversal(curr.left, level + 1);
  };
  traversal(root, 0);

  for (let i of temp) {
    ans.push(i[0]);
  }
  return ans;
};

// console.log(rightSideView([1, 2, 3, 4, null, null, null, 5])); // [1,3,4,5]
