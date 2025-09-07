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
  if (!head || k === 1) return head;

  let sentinel = new ListNode(0, head);
  let l = sentinel;
  let r = head;

  for (let i = 1; i < k; i++) {
    r = r?.next;
  }
  l.next = reverse(r.next, k);
  r.next = reverse(sentinel.next, k);

  return r;
}

function reverse(head, k) {
  if (!head) return head;

  let len = 0;
  let lenPointer = head;
  while (lenPointer) {
    len++;
    lenPointer = lenPointer.next;
  }

  if (len < k) return head;

  let sentinel = new ListNode(0, head);

  let prev = sentinel;
  let curr = head;

  for (let i = 0; i < k; i++) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  return sentinel.next;
}
