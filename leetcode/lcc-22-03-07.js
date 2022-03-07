function mergeTwoLists(list1, list2) {
  const dummy = new ListNode(null);

  let nodeA = list1;
  let nodeB = list2;

  let curr = dummy;

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



