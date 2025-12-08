/*
124. Binary Tree Maximum Path Sum
A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. Note that the path does not need to pass through the root.
The path sum of a path is the sum of the node's values in the path.
Given the root of a binary tree, return the maximum path sum of any non-empty path.

Example 1:
Input: root = [1,2,3]
Output: 6
Explanation: The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6.

Example 2:
Input: root = [-10,9,20,null,null,15,7]
Output: 42
Explanation: The optimal path is 15 -> 20 -> 7 with a path sum of 15 + 20 + 7 = 42.

*/

function maximumPath(root) {
  let res = -Infinity;
  function traversal(curr) {
    if (!curr) return 0; // Base case: no path for null nodes

    // Get max path sum from left and right subtrees, ignore negative sums
    let leftMax = Math.max(0, traversal(curr.left));
    let rightMax = Math.max(0, traversal(curr.right));

    // Current node's path sum (including both left and right)
    let currMax = curr.val + leftMax + rightMax;

    // Update global max path sum if the current path is greater
    res = Math.max(res, currMax);

    // Return the max sum that can be extended to the parent
    return Math.max(leftMax, rightMax) + curr.val;
  }
  traversal(root);
  return res;
}

// console.log(maximumPath([-10, 9, 20, null, null, 15, 7])); // 42
