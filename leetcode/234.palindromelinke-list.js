/*
234 Palindrome Linked list

Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

Example 1:
Input: head = [1,2,2,1]
Output: true

Example 2:
Input: head = [1,2]
Output: false
*/

// > Approach 1 by converting the linked list in array
function isPalindrome(head) {
  let arr = [];
  let curr = head;
  while (curr) {
    arr.push(curr.val);
    curr = curr.next;
  }
  let l = arr.length;

  for (let i = 0; i <= l / 2; i++) {
    if (arr[i - 1] !== arr[l - i]) {
      return false;
    }
  }
  return true;
}

// > Approach 1 by converting the linked list in array

function isPalindrome2(head) {
  //? Finding the Middle Element
  let slow = (fast = head);
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  //? Reversing the Element
  let prev = null;
  let curr = slow;

  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  //? Comparing the Both Linked List
  let firstList = head;
  let secondList = prev;

  while (secondList) {
    if (firstList.val !== secondList.val) {
      return false;
    }
    firstList = firstList.next;
    secondList = secondList.next;
  }

  return true;
}
