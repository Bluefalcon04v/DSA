/*
3217. Delete Nodes From Linked List Present in Array

You are given an array of integers nums and the head of a linked list. Return the head of the modified linked list after removing all nodes from the linked list that have a value that exists in nums.
 

Example 1:
Input: nums = [1,2,3], head = [1,2,3,4,5]
Output: [4,5]

Example 2:
Input: nums = [1], head = [1,2,1,2,1,2]
Output: [2,2,2]

Example 3:
Input: nums = [5], head = [1,2,3,4]
Output: [1,2,3,4]
*/

function modifiedList(nums, head) {
  let dummy = new ListNode(0, head);
  let set = new Set();

  for (let i = 0; i < nums.length; i++) {
    set.add(nums[i]);
  }

  let prev = dummy;
  let curr = head;

  while (curr) {
    if (set.has(curr.val)) {
      prev.next = curr.next;
      curr = curr.next;
    } else {
      curr = curr.next;
      prev = prev.next;
    }
  }
  return dummy.next;
}
