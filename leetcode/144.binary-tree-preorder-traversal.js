/*
144. Binary Tree PreOrder Traversal
Given the root of a binary tree, return the preOrder traversal of its nodes' values.

Example 1:
Input: root = [1,null,2,3]
Output: [1,2,3]

Example 2:
Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]
Output: [1,2,4,5,6,7,3,8,9]

*/

// recursive approach
var preOrderTraversal = function (root) {
  let ans = [];
  function traversal(curr) {
    if (!curr) return;
    ans.push(curr.val);
    traversal(curr.left);
    traversal(curr.right);
  }

  traversal(root);
  return ans;
};

// iterative approach
var preOrderTraversalIterative = function (root) {
  if (!root) return []; // If the tree is empty, return an empty array.

  let ans = []; 
  let stack = [root]; // Initialize the stack with the root node.

  // Loop until the stack is empty.
  while (stack.length) {
    let curr = stack.pop(); // Pop the top node from the stack.

    // Visit the current node (add its value to the answer).
    ans.push(curr?.val);

    // Push the right child first (so the left is processed first in preOrder).
    if (curr.right) stack.push(curr.right);

    // Then push the left child.
    if (curr.left) stack.push(curr.left);
  }

  return ans;
};

// console.log(preOrderTraversalIterative([1, 2, 3, 4, 5, null, 8, null, null, 6, 7, 9])); // [1,2,4,5,6,7,3,8,9]
