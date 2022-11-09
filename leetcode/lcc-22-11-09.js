class StockSpanner {
  constructor() {
    this.prices = [];
  }

  next(price) {
    let span = 1;
    while (n && this.prices[this.prices.length-1][1] <= price) {
      span += this.prices[this.prices.length-1][0];
      this.prices.pop();
    }

    this.prices.push([span, price])
    return span;
  }
}

