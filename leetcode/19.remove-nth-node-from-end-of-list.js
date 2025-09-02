/*
19. Remove Nth Node From End of List

Given the head of a linked list, remove the nth node from the end of the list and return its head.

Example 1:
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]

Example 2:
Input: head = [1], n = 1
Output: []

Example 3:
Input: head = [1,2], n = 1
Output: [1]

*/

//> Approach 1 TWO ITERATION NEEDED
function removeNthFromEnd(head, n) {
  // initialized the sentinel node
  let sentinel = new ListNode();
  sentinel.next = head;

  //calculate the length
  let len = 0;
  let curr = head;
  while (curr) {
    len++;
    curr = curr.next;
  }

  // find the index to be removed
  let removeIndex = len - n;
  let prev = sentinel;
  for (let i = 0; i < removeIndex; i++) {
    prev = prev.next;
  }

  // remove the element
  prev.next = prev.next.next;

  return sentinel.next; // return sentinel.next because it will give the value from the head
}

//> Approach 2 TWO POINTER

function removeNthFromEnd2(head, n) {
  // initialized the sentinel node
  let sentinel = new ListNode();
  sentinel.next = head;

  //  first Pointer to the nth
  let first = (sec = sentinel);
  for (let i = 0; i < n; i++) {
    first = first.next;
  }

  // moving the both of the position
  while (first.next) {
    first = first.next;
    sec = sec.next;
  }
  
  // removing the elements
  sec.next = sec.next.next;
  return sentinel.next;
}
