/*
102. Binary Tree Level Order Traversal
Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]

Example 2:
Input: root = [1]
Output: [[1]]

Example 3:
Input: root = []
Output: []

*/

var levelOrderTraversal = function (root) {
  if (!root) return [];

  let queue = [root];
  let ans = [];

  while (queue.length) {
    let levelArr = [];
    let levelLen = queue.length;

    while (levelLen > 0) {
      let curr = queue.shift();
      curr?.left && queue.push(curr.left);
      curr?.right && queue.push(curr.right);
      levelArr.push(curr.val);
      levelLen--;
    }
    ans.push(levelArr);
  }
  return ans;
};

// console.log(levelOrderTraversal([3, 9, 20, null, null, 15, 7]));
