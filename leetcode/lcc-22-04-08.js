const { MinPriorityQueue } = require('@datastructures-js/priority-queue')
class KthLargest {
  constructor(k, nums) {
    this.k = k;
    this.queue = new MinPriorityQueue();
    nums.forEach(n => this.add(n));
  }


  add(val) {
    if (this.queue.size() < this.k) {
      this.queue.enqueue(val);
    } else if (this.queue.front() < val) {
      this.queue.enqueue(val);
      this.queue.dequeue();
    }

    return this.queue.front();
  }
}

const kthLarg = new KthLargest(3, [4,5,8,2]);

console.log(kthLarg.add(3));
console.log(kthLarg.add(5));
console.log(kthLarg.add(10));
console.log(kthLarg.add(9));
console.log(kthLarg.add(4));
