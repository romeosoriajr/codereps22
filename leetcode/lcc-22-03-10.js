function addTwoNumbers(l1, l2) {
  const dummy = new ListNode(0);

  let currSumNode = dummy;
  let curr1 = l1;
  let curr2 = l2;
  let carry = 0;

  while (curr1 && curr2) {
    let sum = carry + curr1.val + curr2.val;

    if (sum >= 10) {
      carry = 1;
      sum %= 10;
    } else {
      carry = 0;
    }

    const newNode = new ListNode(sum);

    currSumNode.next = newNode;
    currSumNode = currSumNode.next;

    curr1 = curr1.next;
    curr2 = curr2.next;
  }

  //if list is not congruent
  if (curr1) {
    while (curr1) {
      let sum = carry + curr1.val;
      if (sum >= 10) {
        carry = 1;
        sum %= 10;
      } else {
        carry = 0;
      }

      const newNode = new ListNode(sum);
      currSumNode.next = newNode;
      currSumNode = currSumNode.next;

      curr1 = curr1.next;
    }
  } else if (curr2) {
    while (curr2) {
      let sum = carry + curr2.val;
      if (sum >= 10) {
        carry = 1;
        sum %= 10;
      } else {
        carry = 0;
      }

      const newNode = new ListNode(sum);
      currSumNode.next = newNode;
      currSumNode = currSumNode.next;

      curr2 = curr2.next;
    }
  }

  //append any remainder
  if (carry) {
    const newNode = new ListNode(carry);
    currSumNode.next = newNode;
    currSumNode = currSumNode.next;
  }

  return dummy.next;
}
