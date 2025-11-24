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

// -------------------------- Recursive approach
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

// -------------------------- Iterative approach
var isSymmetric = function (root) {
  // Initialize queue with the left and right children of the root
  let queue = [root?.left, root?.right];

  while (queue.length) {
    // Take two nodes at a time to compare
    let p1 = queue.shift();
    let p2 = queue.shift();

    // If both nodes are null, this pair is symmetric — move on
    if (!p1 && !p2) continue;

    // If only one is null, symmetry breaks
    if (!p1 || !p2) return false;

    // If their values don't match, tree is not symmetric
    if (p1.val !== p2.val) return false;

    // Add corresponding child pairs to the queue:
    // left of one with right of the other, and right of one with left of the other
    queue.push(p1.left, p2.right);
    queue.push(p1.right, p2.left);
  }

  // If all checks pass, the tree is symmetric
  return true;
};
