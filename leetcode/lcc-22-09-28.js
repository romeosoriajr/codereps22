function removeNthFromEnd(head, n) {

  let left = head;
  let right = head;

  for (let i=0; i < n; i++) {
    right = right.next;
  }

  if (!right) return head.next;

  while(right.next) {
    right = right.next;
    left = left.next;
  }

  left.next = left.next.next;

  return head;

}
