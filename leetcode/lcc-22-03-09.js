function deleteDuplicates(head) {
  if (!head) return null;

  if (!head.next) return head;

  let temp = head.next;
  let val = head.val;

  if (temp.val !== val) {
    head.next = deleteDuplicates(temp);
    return head;
  } else {
    // keep moving temp to next node until its distinct
    while (temp && temp.val == val) {
      temp = temp.next;
    }

    return deleteDuplicates(temp);
  }
}


