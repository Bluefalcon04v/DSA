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
  let leftPointer = head;

  for (let i = 1; i < left; i++) {
    leftPointer = leftPointer.next;
  }

  let rightPointer = head;
  for (let i = 1; i < right; i++) {
    rightPointer = rightPointer.next;
  }

  let sentinel = new ListNode();
  sentinel.next = leftPointer;

  let prev = sentinel;
  let curr = leftPointer;

  while (leftPointer !== rightPointer) {
    
  }
}
