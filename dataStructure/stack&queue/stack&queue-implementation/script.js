const stack = require("./stack");
const queue = require("./queue");
const stackImplementation = new stack();
stackImplementation.push(100);
console.log("__________________________________________________");
stackImplementation.push(200);
console.log("__________________________________________________");
stackImplementation.push(300);
console.log("__________________________________________________");
stackImplementation.push(400);
console.log("__________________________________________________");
stackImplementation.pop();
console.log("__________________________________________________");
stackImplementation.peek();
console.log("__________________________________________________");
stackImplementation.isEmpty();
console.log("__________________________________________________");
stackImplementation.size();
console.log("__________________________________________________");

const queueImplementation = new queue();

queueImplementation.enqueue(10);
queueImplementation.enqueue(20);
queueImplementation.enqueue(30);

console.log(queueImplementation.peek());    // 10
console.log(queueImplementation.dequeue()); // 10
console.log(queueImplementation.peek());    // 20
console.log("isEmpty ? ",queueImplementation.isEmpty()); // false
queueImplementation.dequeue();
queueImplementation.dequeue();
console.log("isEmpty after removing ? ",queueImplementation.isEmpty()); // true


