class Queue {
  constructor() {
    this.data = {};   // store items in object
    this.front = 0;   // points to first element
    this.rear = 0;    // points to next empty slot
  }

  // Add element at the rear
  enqueue(element) {
    this.data[this.rear] = element;
    this.rear++;
  }

  // Remove element from the front
  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    let item = this.data[this.front];
    delete this.data[this.front];
    this.front++;
    return item;
  }

  // Get element at the front without removing it
  peek() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.data[this.front];
  }

  // Check if queue is empty
  isEmpty() {
    return this.front === this.rear;
  }
}

// Example usage


module.exports = Queue;
