/*
61. Rotate List
Given the head of a linked list, rotate the list to the right by k places.



Example 1
Input: head = [1,2,3,4,5], k = 2
Output: [4,5,1,2,3]

Example 2
Input: head = [0,1,2], k = 4
Output: [2,0,1]

*/

function rotateRight(head, k) {
  if (!head || !head.next) return head;

  let len = 0;
  let curr = head;
  while (curr) {
    len++;
    curr = curr.next;
  }

  k = k % len;

  let slow = head;
  let fast = head;

  for (let i = 0; i < k; i++) {
    fast = fast.next;
  }

  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }

  fast.next = head;
  head = slow.next;
  slow.next = null;

  return head;
}
