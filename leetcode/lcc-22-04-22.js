class MyHashMap {
  constructor() {

    this.size = 500;
    this.multiplier = 600;
    this.data = new Array(this.size);
  }

  hash(key) {
    return key * this.multiplier % this.size;
  }

  put(key, val) {
    this.remove(key);

    const hash = this.hash(key);
    const node = new ListNode(key, val, this.data[hash])
    this.data[hash] = node;
  }

  get(key) {
    const hash = this.hash(key);
    let node = this.data[hash];

    while (node) {

      if (node.key == key) return node.val;
      node = node.next;
    }

    return -1;
  }

  remove(key) {
    const hash = this.hash(key);
    let node = this.data[hash];

    if (!node) return;
    if (node.key == key){

      this.data[hash] = node.next
    } else {
      while (node.next) {
        if (node.next.key == key) {
          node.next = node.next.next;
          return;
        }

        node = node.next;
      }
    }
  }
}
