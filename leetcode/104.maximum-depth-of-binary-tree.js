/*
104. Maximum Depth of Binary Tree
Given the root of a binary tree, return its maximum depth.
A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: 3

Example 2:
Input: root = [1,null,2]
Output: 2

*/

//----------------- Top Down Approach -----------------//
var maxDepth = function (root) {
  if (!root) return 0;
  let maxDeep = 0;

  var traversal = function (curr, currDepth) {
    maxDeep = Math.max(maxDeep, currDepth);
    curr?.left && traversal(curr.left, currDepth + 1);
    curr?.right && traversal(curr.right, currDepth + 1);
  };
  traversal(root, 1);
  return maxDeep;
};

//----------------- Bottom Top Approach -----------------//
var maxDepth = function (root) {
  if (!root) return 0;
  let leftMaxDepth = maxDepth(root.left);
  let rightMaxDepth = maxDepth(root.right);
  return 1 + Math.max(leftMaxDepth, rightMaxDepth);
};
