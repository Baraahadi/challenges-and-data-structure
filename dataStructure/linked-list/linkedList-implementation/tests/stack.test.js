// queue.test.js
const Queue = require("../"); // assuming queue.js contains your Queue class

describe("Queue", () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  test("enqueue adds elements to the queue", () => {
    queue.enqueue(10);
    queue.enqueue(20);
    expect(queue.peek()).toBe(10);
  });

  test("dequeue removes elements in FIFO order", () => {
    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);

    expect(queue.dequeue()).toBe(10);
    expect(queue.dequeue()).toBe(20);
    expect(queue.dequeue()).toBe(30);
  });

  test("peek returns the first element without removing it", () => {
    queue.enqueue(99);
    expect(queue.peek()).toBe(99);
    expect(queue.peek()).toBe(99); // still there
  });

  test("isEmpty returns true when queue is empty", () => {
    expect(queue.isEmpty()).toBe(true);
    queue.enqueue(5);
    expect(queue.isEmpty()).toBe(false);
  });

  test("dequeue and peek on empty queue return 'Queue is empty'", () => {
    expect(queue.dequeue()).toBe("Queue is empty");
    expect(queue.peek()).toBe("Queue is empty");
  });
});
