class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function sortList(head) {
  if (!head || !head.next) return head;

  let temp = null;
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    temp = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  temp.next = null;

  const a = sortList(head);
  const b = sortList(slow);

  return merge(a, b);

  function merge(listA, listB) {
    const dummy = new ListNode(null);
    let curr = dummy;

    let nodeA = listA;
    let nodeB = listB;

    while (nodeA && nodeB) {
      if (nodeA.val < nodeB.val) {
        curr.next = nodeA;
        nodeA = nodeA.next;
      } else {
        curr.next = nodeB;
        nodeB = nodeB.next;
      }

      curr = curr.next;
    }

    if (nodeA) {
      curr.next = nodeA;
    }

    if (nodeB) {
      curr.next = nodeB;
    }

    return dummy.next;
  }
}

const one = new ListNode(1);
const two = new ListNode(2);
const three = new ListNode(3);
const four = new ListNode(4);

four.next = two;
two.next = one;
one.next = three;

console.log(sortList(four));
