function isPalindrome(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let mid = reverse(null, slow);

  return helper(mid, head);

  function reverse(prev, head) {
    if (!head) return prev;
    let temp = head.next;
    head.next = prev;
    return reverse(head, temp);
  }

  function helper(mid, head) {
    if (!mid) return true;
    if (mid.val == head.val) return helper(mid.next, head.next);

    return false;
  }
}
