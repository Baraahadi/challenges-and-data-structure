const LinkedList = require("./linkedList");

const node = new LinkedList();
node.addNode(10);
node.addNode(20);
node.addNode(30);
node.addNode(5);
console.log("linked list after adding nodes" ,node.printLinkedlist());
node.removeNode(5);
console.log('linked list after deleting node ');

node.reverse()
console.log("linked list after reverse" ,node.printLinkedlist());

node.insertAt(1, 15);
console.log('linked list after adding node at 1 index ', node.printLinkedlist());
console.log("Contains 20?", node.includesData(20));
console.log("Contains 50?", node.includesData(0));