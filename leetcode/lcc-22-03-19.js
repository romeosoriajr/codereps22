class FreqStack {
  constructor() {
    this.currMax = 0;
    this.freqCount = new Set();
    this.stackFreq = new Set();
  }

  push(val) {
    const localCount = (this.freqCount.get(val) || 0) + 1;
    this.freqCount.set(val, localCount);
    this.currMax = Math.max(this.currMax, localCount);

    if (!this.stackFreq.has(this.currMax)) {
      this.stackFreq.set(this.currMax, []);
    }

    this.stackFreq.get(localCount).push(val);
  }

  pop() {
    const topFreqVal = this.stackFreq.get(this.currMax).pop();

    this.freqCount.set(topFreqVal, this.freqCount.get(topFreqVal) - 1);

    if (this.stackFreq.get(this.currMax).length == 0) {
      this.currMax -= 1;
    }

    return topFreqVal;
  }
}
