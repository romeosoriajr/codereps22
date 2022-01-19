function detectCycle(head) {
  if (!head) return null;

  let slow = head;
  let fast = head;
  let cycle = false;

  while (slow && fast) {
    if (!fast.next) return null;

    slow = slow.next;
    fast = fast.next.next;

    if (slow == fast) {
      cycle = true;
      break;
    }
  }

  if (!cycle) return null;

  // start from beginning again;
  slow = head;

  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
}



