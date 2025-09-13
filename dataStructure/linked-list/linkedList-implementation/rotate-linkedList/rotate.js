const linkedlist = require('../linkedList')
let list = new linkedlist();
list.addNode(1);
list.addNode(2);
list.addNode(3);
list.addNode(4);
list.addNode(5);
list.rotateLeft(2);

console.log("After Rotating Left by 2:",list.printLinkedlist());
