function rotateRight(head, k) {
  if (!head || !head.next) return head;

  let temp = head;

  let length = 0;

  // get length of list
  while (temp) {
    temp = temp.next;
    length++;
  }

  let offset = k % length;

  // rotation didnt do anything, just return head
  if (offset == 0) return head;

  let currA = head;
  let currB = head;

  for (let i = 1; i < length - offset; i++) {
    currA = currA.next;
    currB = currB.next;
  }

  while (currA.next) {
    currA = currA.next;
  }

  currA.next = head;
  head = currB.next;
  currB.next = null;

  return head;
}
