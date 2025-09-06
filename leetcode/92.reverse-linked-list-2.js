/*
92. Reverse Linked List II

Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.

Example 1:
Input: head = [1,2,3,4,5], left = 2, right = 4
Output: [1,4,3,2,5]

Example 2:
Input: head = [5], left = 1, right = 1
Output: [5]

*/

function reverseBetween(head, left, right) {
  if (!head || left === right) return head;

  const sentinel = new ListNode(0, head);

  let leftPrev = sentinel;

  for (let i = 1; i < left; i++) {
    leftPrev = leftPrev.next;
  }

  let leftPointer = leftPrev.next;
  let rightPointer = sentinel;

  for (let i = 1; i <= right; i++) {
    rightPointer = rightPointer.next;
  }

  let curr = leftPointer.next;
  let prev = leftPointer;
  while (curr !== rightPointer) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
    temp = temp.next;
  }
  leftPointer.next = rightPointer.next;
  rightPointer.next = prev;
  leftPrev.next = rightPointer;

  return sentinel.next;
}

function reverseBetween(head, left, right) {
  if (!head || left === right) return head;

  const dummy = new ListNode(0, head);
  let prev = dummy;

  for (let i = 1; i < left; i++) prev = prev.next;

  let curr = prev.next;
  for (let i = 0; i < right - left; i++) {
    let temp = curr.next;
    curr.next = temp.next;
    temp.next = prev.next;
    prev.next = temp;
  }

  return dummy.next;
}
