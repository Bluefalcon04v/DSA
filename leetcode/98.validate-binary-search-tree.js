/*
98. Validate Binary Search Tree

Given the root of a binary tree, determine if it is a valid binary search tree (BST).
A valid BST is defined as follows:
The left subtree of a node contains only nodes with keys strictly less than the node's key.
The right subtree of a node contains only nodes with keys strictly greater than the node's key.
Both the left and right subtrees must also be binary search trees.

Example 1:
Input: root = [2,1,3]
Output: true

Example 2:
Input: root = [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.

*/

function isValidBST(curr, low = null, hig = null) {
  if (!curr) return true;

  // Check if current node's value violates the valid range:
  // - It must be strictly greater than 'low'
  // - It must be strictly smaller than 'hig'
  if ((low !== null && curr.val <= low) || (hig !== null && curr.val >= hig)) {
    return false;
  }

  // Recursively validate the left subtree:
  // max allowed value becomes curr.val
  let leftBST = isValidBST(curr.left, low, curr.val);

  // Recursively validate the right subtree:
  // min allowed value becomes curr.val
  let rightBST = isValidBST(curr.right, curr.val, hig);

  // Both left and right subtrees must be valid
  return leftBST && rightBST;
}
