/*
25. Reverse Nodes in k-Group

Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.
k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.
You may not alter the values in the list's nodes, only nodes themselves may be changed.

Example 1:
Input: head = [1,2,3,4,5], k = 2
Output: [2,1,4,3,5]

Example 2:
Input: head = [1,2,3,4,5], k = 3
Output: [3,2,1,4,5]

*/

function reverseKGroup(head, k) {
  let l = head;
  let r = head;

  for (let i = 1; i < k; i++) {
    r = r.next;
  }

  let n = reverse(r.next, k);

//   r.next = l;
  l.next = n;

  return r;
}

function reverse(head, k) {
  if (!head || !head.next) return head;

  let len = 0;
  let lenPointer = head;
  while (lenPointer) {
    len++;
    lenPointer = lenPointer.next;
  }

  if (len < k) return head;

  let sentinel = new ListNode();
  sentinel.next = head;
  let curr = head;
  let next = curr.next;
  let prev = sentinel;

  while (curr) {
    curr.next = prev;
    prev = curr;
    curr = next;
    next = curr.next;
  }

  return sentinel.next;
}
