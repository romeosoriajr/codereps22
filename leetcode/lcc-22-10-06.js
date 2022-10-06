class TimeMap {
  constructor() {
    this.keys = new Map();
  }

  set(key, value, timestamp) {
    if (!this.keys.has(key)) this.keys.set(key, new Map());
    this.keys.get(key).set(timestamp, value);
  }

  get(key, timestamp) {
    if (!this.keys.has(key)) return "";

    const timestamps = this.keys.get(key);

    if (timestamps.has(timestamp)) return timestamps.get(timestamp);

    while (timestamp-- > -1) {
      if (timestamps.has(timestamp)) return timestamps.get(timestamp);
    }

    return "";
  }
}

