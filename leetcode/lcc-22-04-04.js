function swapNodes (head, k) {
  let l = head;
  let r = head;
  let count = 0;

  while (l) {
    count++;
    if (count == k) break;
    l = l.next;
  }

  let curr = l;
  while (curr.next) {
    curr = curr.next;
    r = r.next;
  }

  [l.val, r.val] = [r.val, l.val];

  return head;
}


