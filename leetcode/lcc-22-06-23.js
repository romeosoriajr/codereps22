function scheduleCourse(courses) {
  const heap = new MaxPriorityQueue();
  let totalTime = 0;

  courses.sort((a, b) => a[1] - b[1]);
  for (const [time, end] of courses) {
    totalTime += time;
    heap.enqueue(time);

    while (totalTime > end) totalTime -= heap.dequeue().element;
  }
  return heap.size();
}

