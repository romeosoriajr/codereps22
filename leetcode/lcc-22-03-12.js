function copyRandomList(head) {
  const map = new Map([[null, null]]);

  let dummy = new Node(0);
  let clonePrev = dummy;
  let cloneCurr;

  let curr = head;

  while (curr) {
    cloneCurr = new Node(curr.val);
    map.set(curr, cloneCurr);

    curr = curr.next;
    clonePrev.next = cloneCurr;
    clonePrev = clonePrev.next;
  }

  clonePrev.next = null;

  curr = head;
  while (curr) {
    cloneCurr = map.get(curr);
    cloneCurr.next = map.get(curr.next);
    cloneCurr.random = map.get(curr.random);

    curr = curr.next;
  }

  return dummy.next;
}



