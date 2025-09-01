/*
203. Remove Linked List Elements

Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

Example 1
Input: head = [1,2,6,3,4,5,6], val = 6
Output: [1,2,3,4,5]

Example 2:
Input: head = [], val = 1
Output: []

Example 3:
Input: head = [7,7,7,7], val = 7
Output: []

*/
//> Two Pointer Approach
function removeElements(head, val) {
  if (head == null) return head;
  while (head.val == val) {
    if (head.next == null) return null;
    head = head.next;
  }
  let curr = head.next;
  let prev = head;
  while (curr) {
    if (curr.val == val) {
      if (curr.next == null) prev.next = null;
      let temp = curr.next;
      prev.next = curr.next;
      curr = temp;
    } else {
      curr = curr.next;
      prev = prev.next;
    }
  }
  return head;
}

//> Second Approach
//? SENTINEL
function removeElements2(head, val) {
  let sentinel = new ListNode();
  sentinel.next = head;

  let prev = sentinel;

  while (prev && prev.next) {
    if (prev.next.val === val) {
      prev.next = prev.next.next;
    } else {
      prev = prev.next;
    }
  }
  return sentinel.next;
}
