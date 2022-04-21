class MyHashSet {
  constructor() {
    this.keys = new Set();
  }

  add (key) {
    this.keys.add(key);
  }

  remove (key) {
    this.keys.delete(key);
  }

  contains (key) {
    return !!this.keys.has(key);
  }
}


