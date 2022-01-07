// reservoir sampling
class Solution {
  constructor(head) {
    this.head = head;
  }

  getRandom() {
    let curr = this.head;

    let i = 1;
    let result = 0;

    while (curr) {
      if (Math.random() * i < 1) result = curr.val;
      curr = curr.next;
      i++;
    }

    return result;
  }
}



