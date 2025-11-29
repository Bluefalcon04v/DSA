/*
110 Balanced Binary Tree
Given a binary tree, determine if it is height-balanced.

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: true

Example 2:
Input: root = [1,2,2,3,3,null,null,4,4]
Output: false

Example 3:
Input: root = []
Output: true

*/

var balancedTree = function (root) {
  let ans = true;
  function traversal(curr) {
    if (!curr) return 0;

    let leftHeight = traversal(curr.left);
    let rightHeight = traversal(curr.right);
    if (Math.abs(leftHeight - rightHeight) > 1) {
      ans = ans && false;
    }
    return 1 + Math.max(leftHeight, rightHeight);
  }
  traversal(root);
  return ans;
};

// console.log(balancedTree([3, 9, 20, null, null, 15, 7])); // true
// console.log(balancedTree([1, 2, 2, 3, 3, null, null, 4, 4])); // false
