class NestedIterator {
  constructor(nestedList) {
    this.list = [];
    this._helper(nestedList);
  }
  next() {
    return this.list.shift();
  }
  hasNext() {
    return this.list.length;
  }
  _helper(nestedList) {
    for (let x of nestedList)
      if (x.isInteger()) this.list.push(x.getInteger());
      else this._helper(x.getList());
  }
}


