# 📝 Sort and Merge Linked List Assignment

---

## **Problem Domain**
A **Linked List** is a dynamic data structure consisting of nodes where each node contains:

- **Data:** The value stored in the node.  
- **Pointer:** A reference to the next node in the list.  

Here we add new operations:

1. **🔢 Sort** – Sort the linked list in ascending order.  
2. **➕ Merge** – Merge two sorted linked lists into a new sorted linked list.

---

## 🎯 Input
Operations that can be performed on the linked list:

| Operation | Example | Description |
|-----------|---------|-------------|
| Sort      | `sortlist()` | Sorts the linked list in ascending order |
| Merge     | `LinkedList.mergeLists(list1, list2)` | Merges two sorted lists into a new sorted linked list |

---

## 🖥️ Expected Output
- **List 1:** `3 -> 1 -> 5 -> 2 -> null`  
- **List 2:** `4 -> 0 -> 6 -> null`  
- **Sorted List 1:** `1 -> 2 -> 3 -> 5 -> null`  
- **Sorted List 2:** `0 -> 4 -> 6 -> null`  
- **Merged Sorted List:** `0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null`  

---

## ⚠️ **Edge Cases**
- **🟢 Empty List:** Sorting or merging leaves list unchanged.  
- **🟠 Single Node:** Sorting keeps the same node.  
- **🔴 Duplicates:** Keep duplicates in the merged result.  

---

## 🧠 **Algorithms**

### **🔢 Sort (Bubble Sort for simplicity)**
1. Traverse the list multiple times.  
2. Swap the `data` of nodes if current > next.  
3. Repeat until no swaps are needed.  

**Time Complexity:** O(n²), Space Complexity: O(1)

---

### **➕ Merge**
1. Take two sorted lists.  
2. Use two pointers (`current1` and `current2`).  
3. Compare values and attach the smaller node to a new list.  
4. Continue until all nodes are merged.  

**Time Complexity:** O(n + m), Space Complexity: O(1)

---
## 👀 Visual
[╔════════════════╗
║ 🖥️ Test Code ║
╚════════════════╝ ](../docs/merge-test.PNG)
>
[╔══════════════╗
║ 🖥️ Console Log║
╚══════════════╝ ](../docs/merge-console.PNG)
 >

---

```javascript
"use strict";

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  addNode(data) {
    this.head = new Node(data, this.head);
  }
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
}

---
// ✅ Example Usage
const firstLinkedList = new LinkedList();
firstLinkedList.addNode(9);
firstLinkedList.addNode(0);
firstLinkedList.addNode(1);
firstLinkedList.addNode(8);
firstLinedList.sortlist();
const secondLinkedList = new LinkedList();
secondLinkedList.addNode(5);
secondLinkedList.addNode(0);
secondLinkedList.addNode(3);
secondLinkedList.addNode(7);
firstLinedList.sortlist();
const merged = LinkedList.mergeLists(firstLinkedList, secondLinkedList);
console.log("Merged list:", merged.printLinkedlist());