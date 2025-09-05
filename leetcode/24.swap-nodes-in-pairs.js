/*
24. Swap Nodes in Pairs

Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)


Example 1:
Input: head = [1,2,3,4]
Output: [2,1,4,3]

Example 2:
Input: head = []
Output: []

Example 3:
Input: head = [1]
Output: [1]

Example 4:
Input: head = [1,2,3]
Output: [2,1,3]
*/

// ? Iterative Approach

function swapPairs(head) {
  if (!head || !head.next) return head;
  let sentinel = new ListNode();
  sentinel.next = head;

  let prev = sentinel;
  let curr = head;
  let next = head.next;

  while (curr && curr.next) {
    prev.next = next;
    curr.next = next.next;
    next.next = curr;

    prev = curr;
    curr = prev.next;
    next = curr.next;
  }
  return sentinel.next;
}

//? Recursive Approach
function swapPairsRecursive(head) {
  if (!head || !head.next) return head;
  let l = head;
  let r = head.next;

  l.next = swapPairsRecursive(r.next);
  r.next = l;

  return r;
}
