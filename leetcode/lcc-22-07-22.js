function partition(head, x) {
  let left = new ListNode(0);
  let right = new ListNode(0);

  let leftTail = left;
  let rightTail = right;

  while (head) {
    if (head.val < x) {
      leftTail.next = head;
      leftTail = leftTail.next;
    } else {
      rightTail.next = head;
      rightTail = rightTail.next;
    }

    head = head.next;
  }

  leftTail.next = right.next;
  rightTail.next = null;

  return left.next;
}

