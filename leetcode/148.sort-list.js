/*
148 Sort List

Given the head of a linked list, return the list after sorting it in ascending order.

Example 1
Input: head = [4,2,1,3]
Output: [1,2,3,4]

Example 2
Input: head = [-1,5,3,4,0]
Output: [-1,0,3,4,5]

Example 3:
Input: head = []
Output: []
 
*/

function sortList(head) {
  if (!head || !head.next) return head;
  let slow = head;
  let fast = head;
  let next = null;
  while (fast && fast.next) {
    next = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  next.next = null; // node -> null so that we can split it

  let left = sortList(head);
  let right = sortList(slow);

  return merge(left, right);
}

var merge = function (left, right) {
  let dummy = new ListNode(0);
  let temp = dummy;

  while (left && right) {
    if (left.val <= right.val) {
      temp.next = left;
      left = left.next;
    } else {
      temp.next = right;
      right = right.next;
    }

    temp = temp.next;
  }

  temp.next = left || right;

  return dummy.next;
};
