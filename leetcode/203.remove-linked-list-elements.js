function removeElements(head, val) {
  let curr = (prev = head);

  curr = curr.next;
  while (curr != null || curr.next != null) {
    if (curr == val) {
      while (curr === val) {
        curr = curr.next;
      }
      prev.next = curr;
    } else {
      curr = curr.next;
      prev = prev.next;
    }
  }
  return head;
}
