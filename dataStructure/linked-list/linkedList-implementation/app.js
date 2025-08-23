const LinkedList = require("./linkedList");

const node = new LinkedList();
node.addNode(10);
node.addNode(20);
node.addNode(30);
console.log("linked list after adding nodes" ,node.printLinkedlist());

node.removeNode(10)
console.log("linked list after deleting node" ,node.printLinkedlist());

node.insertAt(1, 15);
console.log("Contains 20?", node.includesData(20));
console.log("Contains 50?", node.includesData(0));
console.log("linked list" ,node.printLinkedlist());
