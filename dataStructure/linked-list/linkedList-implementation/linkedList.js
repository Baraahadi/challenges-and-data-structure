"use strict";
const Node = require("./node");
class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  //Function 01 add new node in the first
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

  //Function 02 print linked list
  printLinkedlist() {
    let item = this.head;
    let result = "";

    while (item) {
      result = result + item.data + "->";
      item = item.next;
    }
    return result + "null";
  }

  //Function 03 remove node from linked list
  removeNode(data) {
    if (!this.head) {
      console.log("list is empty no element to delete");
      return;
    }
    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }
    let prev = null;
    let current = this.head;
    while (current && current.data !== data) {
      prev = current;
      current = current.next;
    }
    if (!current) {
      console.log("value is not found in list");
      return;
    }
    prev.next = current.next;
  }

  //Function 04 check if data exist in linked list
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

  //Function 06 reverse linked list
  reverse() {
    let prev = null;
    let current = this.head;
    let next = null;

    if (current == null) {
      console.log("linked list is empty nothing to reverse");
    }
    while (current !== null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    this.head = prev;
  }

  //Function 07 sorted linked list
  sortlist() {
  if (!this.head || !this.head.next) 
    {
      console.log("already sorted");
      return;
      
    }

  let swapped;
  do {
    swapped = false;
    let current = this.head;

    while (current && current.next) {
      if (current.data > current.next.data) {
        // swap data
        let temp = current.data;
        current.data = current.next.data;
        current.next.data = temp;
        swapped = true;
      }
      current = current.next;
    }
  } while (swapped);
}

// Function 08 merge two linked list
static mergeLists(firstLinkedList, secondLinkedList) {
  const test = new Node(0);
  let tail = test;

  let current1 = firstLinkedList.head;
  let current2 = secondLinkedList.head;

  while (current1 && current2) {
    if (current1.data <= current2.data) {
      tail.next = current1;
      current1 = current1.next;
    } else {
      tail.next = current2;
      current2 = current2.next;
    }
    tail = tail.next;
  }

  if (current1) tail.next = current1;
  if (current2) tail.next = current2;

  const mergedList = new LinkedList();
  mergedList.head = test.next;
  return mergedList;
}

// Function 08 merge two linked list
 // Rotate the list left by k places
  rotateLeft(k) {
    if (!this.head || k === 0) return;

    // Step 1: Find length
    let length = 1;
    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
      length++;
    }

    // Handle k greater than length
    k = k % length;
    if (k === 0) return;

    // Step 2: Move to kth node
    let current = this.head;
    let count = 1;
    while (count < k && current) {
      current = current.next;
      count++;
    }

    // Step 3: Update head and tail
    let newHead = current.next;
    current.next = null;  // Break link
    tail.next = this.head; // Connect end to old head
    this.head = newHead;  // Update head
  }
}

module.exports = LinkedList;