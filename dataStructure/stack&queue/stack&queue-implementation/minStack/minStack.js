class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(value) {
    this.stack.push(value);
    if (
      this.minStack.length === 0 ||
      value <= this.minStack[this.minStack.length - 1]
    ) {
      this.minStack.push(value);
    }
  }

  pop() {
    if (this.stack.length === 0) return null;
    let removed = this.stack.pop();
    if (removed === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }
    return removed;
  }

  top() {
    if (this.stack.length === 0) return null;
    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  getMin() {
    if (this.minStack.length === 0) return null;

    return this.minStack[this.minStack.length - 1];
  }

  printStack() {
    console.log(this.stack.join(" -> "));
  }
}

module.exports = MinStack;
