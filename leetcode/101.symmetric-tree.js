/*
101. Symmetric Tree
Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

Example 1:
Input: root = [1,2,2,3,4,4,3]
Output: true

Example 2:
Input: root = [1,2,2,null,3,null,3]
Output: false

*/

var isSymmetric = function (root) {
  function traversal(left, right) {
    // If both nodes are null, this part of the tree is symmetric
    if (!left && !right) return true;

    // If only one of the nodes is null, it's not symmetric
    if (!left || !right) return false;

    // Check if current values match AND
    // left subtree of left matches right subtree of right AND
    // right subtree of left matches left subtree of right
    return (
      left.val === right.val &&
      traversal(left.left, right.right) &&
      traversal(left.right, right.left)
    );
  }

  // Start comparing the left and right subtrees of the root
  return traversal(root.left, root.right);
};
