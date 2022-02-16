function swapPairs(head) {
  if (!head || !head.next) return head;

  const temp = head.next;

  head.next = swapPairs(head.next.next);
  temp.next = head;

  return temp;
}

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const one = new ListNode(1);
const two = new ListNode(2);
const three = new ListNode(3);
const four = new ListNode(4);

one.next = two;
two.next = three;
three.next = four;

console.log(swapPairs(one));
