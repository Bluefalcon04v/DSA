/*
86 Partition List

Given the head of a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.
You should preserve the original relative order of the nodes in each of the two partitions.

Example 1:
Input: head = [1,4,3,2,5,2], x = 3
Output: [1,2,2,4,3,5]

Example 2:
Input: head = [2,1], x = 2
Output: [1,2]

*/

function partition(head, x) {
  let biggerThanX = new ListNode(0, null);
  let smallThanX = new ListNode(0, null);
  let bigPtr = biggerThanX;
  let bigFixedHead = biggerThanX;
  let smallPtr = smallThanX;

  let curr = head;
  while (curr) {
    if (curr.val >= x) {
      bigPtr.next = new ListNode(curr.val);
      bigPtr = bigPtr?.next;
      curr = curr.next;
    } else {
      smallPtr.next = new ListNode(curr.val);
      smallPtr = smallPtr?.next;
      curr = curr.next;
    }
  }

  smallPtr.next = bigFixedHead.next;

  return smallThanX.next;
}
