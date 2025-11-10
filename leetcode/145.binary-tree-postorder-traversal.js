/*
145. Binary Tree PostOrder Traversal
Given the root of a binary tree, return the postOrder traversal of its nodes' values.

Example 1:
Input: root = [1,null,2,3]
Output: [3,2,1]

Example 2:
Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]
Output: [4,6,7,5,2,9,8,3,1]

*/

var postOrderTraversal = function (root) {
  // left node -> right node -> root node
  let ans = [];
  function traversal(curr) {
    if (!curr) return;
    traversal(curr.left);
    traversal(curr.right);
    ans.push(curr.val);
  }
  traversal(root);
  return ans;
};

// console.log(postOrderTraversal([1, 2, 3, 4, 5, null, 8, null, null, 6, 7, 9])); // [4,6,7,5,2,9,8,3,1]
