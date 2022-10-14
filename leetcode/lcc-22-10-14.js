function deleteMiddle(head) {

  if(!head || !head.next) return null;

  let slow = head;
  let prevSlow = null;
  let fast = head;

  while (fast?.next) {
    prevSlow = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  prevSlow.next = slow.next;
  slow.next = null;

  return head;

}

