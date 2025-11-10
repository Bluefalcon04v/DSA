/*
94. Binary Tree InOrder Traversal

Given the root of a binary tree, return the inOrder traversal of its nodes' values.

Example 1:
Input: root = [1,null,2,3]
Output: [1,3,2]

Example 2:
Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]
Output: [4,2,6,5,7,1,3,9,8]

*/

var inOrderTraversal = function (root) {
  // left node -> root node -> right node
  let ans = [];
  function traversal(curr) {
    if (!curr) return;
    traversal(curr.left);
    ans.push(curr.val);
    traversal(curr.right);
  }
  traversal(root);
  return ans;
};

// console.log(inOrderTraversal([1, 2, 3, 4, 5, null, 8, null, null, 6, 7, 9])); // [4,2,6,5,7,1,3,9,8]
