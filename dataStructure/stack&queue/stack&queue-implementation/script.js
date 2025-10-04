const stack = require("./stack");
const queue = require("./queue");
const minimumStack = require("./minStack/minStack");
const middleStack= require("./deleteFromStack/deleteMiddle");

// stack implementation
// const stackImplementation = new stack();
// stackImplementation.push(100);
// console.log("__________________________________________________");
// stackImplementation.push(200);
// console.log("__________________________________________________");
// stackImplementation.push(300);
// console.log("__________________________________________________");
// stackImplementation.push(400);
// console.log("__________________________________________________");
// stackImplementation.pop();
// console.log("__________________________________________________");
// stackImplementation.peek();
// console.log("__________________________________________________");
// stackImplementation.isEmpty();
// console.log("__________________________________________________");
// stackImplementation.size();
// console.log("__________________________________________________");

// // queue implementation
// const queueImplementation = new queue();

// queueImplementation.enqueue(10);
// queueImplementation.enqueue(20);
// queueImplementation.enqueue(30);

// console.log(queueImplementation.peek()); // 10
// console.log(queueImplementation.dequeue()); // 10
// console.log(queueImplementation.peek()); // 20
// console.log("isEmpty ? ", queueImplementation.isEmpty()); // false
// queueImplementation.dequeue();
// queueImplementation.dequeue();
// console.log("isEmpty after removing ? ", queueImplementation.isEmpty()); // true

// // min stack challenge
// let minStack = new minimumStack();
// minStack.push(5);
// minStack.push(2);
// minStack.push(10);
// minStack.push(1);

// minStack.printStack(); // 5 -> 2 -> 10 -> 1
// console.log("Top:", minStack.top()); // 1
// console.log("Min:", minStack.getMin()); // 1

// minStack.pop();
// console.log("After pop, Min:", minStack.getMin()); // 2
 let midStack = new middleStack();
 midStack.push(10);
  midStack.push(20);
 midStack.push(30);
 midStack.push(40);
 midStack.printStack();
 console.log("______________________________________");
 
 midStack.deleteMiddle();
 midStack.printStack();

