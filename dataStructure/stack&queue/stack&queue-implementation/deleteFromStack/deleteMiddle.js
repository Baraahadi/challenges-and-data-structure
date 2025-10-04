class MiddleStack {
  constructor() {
    this.data = {};  
    this.count = 0;  
  }

  // add element
  push(value) {
    this.data[this.count] = value;
    this.count++;
  }

  // remove top element
  pop() {
    if (this.count === 0) return null;
    this.count--;
    let deleted = this.data[this.count];
    delete this.data[this.count];
    return deleted;
  }

  // get top element
  peek() {
    if (this.count === 0) return null;
    return this.data[this.count - 1];
  }

  isEmpty() {
    return this.count === 0;
  }

  size() {
    return this.count;
  }

  deleteMiddle() {
    if (this.isEmpty()) return null;

    let n = this.size();
    let midIndex = Math.floor((n - 1) / 2);

    const removeMiddle = (stack, index) => {
      if (index === midIndex) {
        stack.pop();  
        return;
      }
      let temp = stack.pop();    
      removeMiddle(stack, index - 1);
      stack.push(temp);  
    };

    removeMiddle(this, n - 1);
  }

  printStack() {
    console.log(this.data);
  }
}

module.exports = MiddleStack;


