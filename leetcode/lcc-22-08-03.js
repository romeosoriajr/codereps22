class MyCalendar {
  constructor() {

    this.events = new Map();
  }

  book(start, end) {

    for (const [startA, endA] of this.events.entries()) {
      if (Math.max(start, startA) < Math.min(end, endA)) return false;
    }
    this.events.set(start, end);
    return true;

  }
}


