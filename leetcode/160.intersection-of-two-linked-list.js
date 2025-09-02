/*
160. Intersection of Two Linked Lists

Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.

For example, the following two linked lists begin to intersect at node c1:

Example 1
Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
Output: Intersected at '8'

Example 2
Input: intersectVal = 2, listA = [1,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
Output: Intersected at '2'
Explanation: The intersected node's value is 2 (note that this must not be 0 if the two lists intersect).
*/

function getIntersectionNode(headA, headB) {
  let setB = new Set();
  let currB = headB;
  while (currB) {
    setB.add(currB);
    currB = currB.next;
  }

  let currA = headA;
  while (currA) {
    if (setB.has(currA)) return currA;
    currA = currA.next;
  }

  return null;
}
