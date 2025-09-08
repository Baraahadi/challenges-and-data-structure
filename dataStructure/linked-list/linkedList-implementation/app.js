const LinkedList = require("./linkedList");

const node = new LinkedList();
node.addNode(10);
node.addNode(0);
node.addNode(30);
node.addNode(5);
console.log("linked list after adding nodes" ,node.printLinkedlist());
console.log("___________________________________");

node.removeNode(5);
console.log('linked list after deleting node ', node.printLinkedlist());
console.log("___________________________________");

node.reverse()
console.log("linked list after reverse" ,node.printLinkedlist());
console.log("___________________________________");

node.insertAt(1, 15);
console.log('linked list after adding node at 1 index ', node.printLinkedlist());
console.log("___________________________________");

console.log("Contains 20?", node.includesData(20));
console.log("Contains 50?", node.includesData(0));
console.log("___________________________________");

// first linkedlist sorted
const firstLinkedList = new LinkedList();
firstLinkedList.addNode(9);
firstLinkedList.addNode(0);
firstLinkedList.addNode(1);
firstLinkedList.addNode(8);
console.log("first linked list after add nodes" ,firstLinkedList.printLinkedlist());
firstLinkedList.sortlist();
console.log("first linked list after sorting" ,firstLinkedList.printLinkedlist());
console.log("___________________________________");

// second linkedlist sorted
const secondLinkedList = new LinkedList();
secondLinkedList.addNode(5);
secondLinkedList.addNode(0);
secondLinkedList.addNode(3);
secondLinkedList.addNode(7);
console.log("second linked list after add nodes" ,secondLinkedList.printLinkedlist());
secondLinkedList.sortlist();
console.log("second linked list after sorting" ,secondLinkedList.printLinkedlist());

console.log("___________________________________");

const merged = LinkedList.mergeLists(firstLinkedList, secondLinkedList);
console.log("Merged list:", merged.printLinkedlist());