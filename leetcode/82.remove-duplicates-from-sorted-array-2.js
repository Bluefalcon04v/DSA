/*
82. Remove Duplicates from Sorted List II

Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.

Example 1:
Input: head = [1,2,3,3,4,4,5]
Output: [1,2,5]

Example 2:
Input: head = [1,1,1,2,3]
Output: [2,3]

*/

function deleteDuplicates(head) {
  let sentinel = new ListNode();
  sentinel.next = head;

  let prev = sentinel;
  let curr = head;
  while (curr && curr.next) {
    if (curr.val === curr.next.val) {
      while (curr.val === curr.next.val) {
        curr = curr.next;
      }
      prev.next = curr.next;
    } else {
      curr = curr.next;
      prev = prev.next;
    }
  }

  return sentinel.next;
}
