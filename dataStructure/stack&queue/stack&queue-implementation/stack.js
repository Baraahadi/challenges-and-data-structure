class DefaultStack {
  constructor() {
    this.data = [];
    this.count = 0;
  }

  // push function to add data at the top of stack
  push(item) {
    this.data[this.count] = item;
    console.log(`${this.data} added to the ${this.count} index`);

    this.count++;
    return this.count - 1;
  }

  // pop function to remove element from the top of stack
  pop() {
    if (this.count == 0) return console.log("The stack is empty");
    // console.log(`this count = ${this.count}`); // number of elemnts inside the stack
    // console.log(`this data = ${this.data}`);

    let deletedItem = this.data[this.count - 1]; // to git the exact final index to the element which on the top of stack
    this.data.splice(this.count - 1, 1);
    this.count -= 1;
    console.log(` this item ${deletedItem} is removed frop stack`);
    console.log(` stack after deletion ${this.data}`);
    return deletedItem;
  }

  // peek function to view top element on the stack without removing

  peek() {
    let topElement = this.data[this.count - 1];
    console.log(`The top element on the stack is ${topElement}`);
    return topElement;
  }
  // isEmpty function to check if the stack empty or not
  isEmpty() {
    let check = true;
    if (this.count == 0) {
      console.log("IS THE STACK EMPTY ? " + check);
    } else {
      console.log("IS THE STACK EMPTY ? " + !check);
    }

    return check;
  }
  size() {
    console.log(`${this.count} element on the stack : ${this.data}`);
    return this.count;
  }
}
// const stack= new Stack();

module.exports = DefaultStack;
