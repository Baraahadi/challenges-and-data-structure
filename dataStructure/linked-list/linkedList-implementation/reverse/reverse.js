const linkedlist = require('../linkedList')
const newNode= new linkedlist();
newNode.addNode(10);
newNode.addNode(20);
newNode.addNode(30);
console.log('linked list after add new nodes ', newNode.printLinkedlist());

newNode.reverse();
console.log('linked list after reverse nodes ', newNode.printLinkedlist());
