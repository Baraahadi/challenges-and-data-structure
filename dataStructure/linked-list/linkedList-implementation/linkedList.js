"use strict";
const Node = require("./node");
class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  addNode(data) {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
    } else {
      let item = this.head;
      this.head = node;
      node.next = item;
    }
  }
  printLinkedlist() {
    let item = this.head;
    let result = "";

    while (item) {
      result = result + item.data + "->";
      item = item.next;
    }
    return result + "null"
  }
  removeNode(data) {
    if (!this.head) {
      console.log("list is empty no element to delete");
      return;
    }
    if (this.head.data === data) {
      this.head = this.head.next;
      return ;
    }
    let prev = null;
    let current = this.head;
    while (current && current.data !== data)
     {
      prev = current;
      current = current.next;
    }
    if (!current)
     {
      console.log("value is not found in list");
      return;
    }
    prev.next = current.next;

  }
  includesData(data) {
    let current = this.head;
    while (current !== null) {
      if (current.data === data) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  //Function 05 insert node in a specific index
  insertAt(index, data) {
    let node = new Node(data);

    if (index === 0) {
      node.next = this.head;
      this.head = node;
      return;
    }

    let current = this.head;
    let count = 0;

    while (current !== null && count < index - 1) {
      current = current.next;
      count++;
    }

    if (current === null) {
      console.log("Index out of bounds");
      return;
    }

    node.next = current.next;
    current.next = node;
  }
}

module.exports = LinkedList;
// const newNode = new LinkedList();
// newNode.addNode(5);
// newNode.addNode(10);
// newNode.addNode(20);
// newNode.addNode(30);
// newNode.removeNode(10);
// newNode.includesData(20);
// newNode.insertAt(2, 50);
// newNode.printLinkedlist();
