function mergeKLists(lists) {
  return getMid(lists, 0, lists.length - 1);

  function getMid(lists, start, end) {
    if (start == end) return lists[start];

    const mid = Math.floor((start+end) / 2);
    let left = getMid(lists, start, mid);
    let right = getMid(lists, mid + 1, end);

    return merge(left, right);
  }

  function merge(list1, list2) {
    const result = new ListNode(0);
    let currNode = result;

    let pointerA = list1;
    let pointerB = list2;

    while (pointerA || pointerB) {
      if (!pointerA) {
        currNode.next = pointerB;
        pointerB = pointerB.next;
      } else if (!pointerB) {
        currNode.next = pointerA;
        pointerA = pointerA.next;
      } else if (pointerA.val < pointerB.val) {
        currNode.next = pointerA;
        pointerA = pointerA.next;
      } else {
        currNode.next = pointerB;
        pointerB = pointerB.next;
      }

      currNode = currNode.next;
    }

    return result.next;
  }
}
