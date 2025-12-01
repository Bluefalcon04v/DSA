/*
572. Subtree of Another Tree
Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.
A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.

Example 1:
Input: root = [3,4,5,1,2], subRoot = [4,1,2]
Output: true

Example 2:
Input: root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]
Output: false

*/

let isSubtree = (root, subRoot) => {
  // Generate hash of root and subRoot tree
  let rootHash = generateTreeHash(root);
  let subRootHash = generateTreeHash(subRoot);

  // Check if the hash of subRoot is contained within the hash of root
  return rootHash.includes(subRootHash);
};

let generateTreeHash = (root) => {
  let hash = ""; // String to store the tree structure

  // Helper function to perform pre-order traversal of the tree
  let traverse = function (node) {
    if (!node) {
      // Represent null nodes with "-#"
      hash = hash + "-#";
      return;
    }
    // Add the current node's value to the hash
    hash = hash + "-" + node.val;
    traverse(node.left);
    traverse(node.right);
  };

  traverse(root);
  return hash;
};

// console.log(isSubtree([3, 4, 5, 1, 2], [4, 1, 2])); // true
// console.log(isSubtree([3, 4, 5, 1, 2, null, null, null, null, 0], [4, 1, 2])); // false
