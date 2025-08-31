# 📝 Reverse Linked List Assignment

---

## **Problem Domain**
A **Linked List** is a dynamic data structure consisting of nodes where each node contains:

- **Data:** The value stored in the node.  
- **Pointer:** A reference to the next node in the list.  

Here we add a new operation:

1. **🔄 Reverse** – Reverse the linked list *in place* without creating a new list.

---

## 🎯 Input
Operations that can be performed on the linked list:

| Operation | Example | Description |
|-----------|---------|-------------|
| Reverse   | `Reverse` | Reverses the linked list nodes in place |

---

## 🖥️ Expected Output
- **Original List:** `3 -> 2 -> 1 -> null`  
- **After Reverse:** `1 -> 2 -> 3 -> null`  

---

## ⚠️ **Edge Cases**

Here are some special scenarios to consider when working with Reverse Linked List:

- **🟢 Empty List:**  
  Reversing should leave the list unchanged → `head = null`  

- **🟠 Single Node:**  
  Reversing should keep the same node as head  

- **🔴 Multiple Nodes:**  
  Links must be updated correctly without losing nodes  

---

## 🧠 **Algorithm**

### **🔄 Reverse**
- Initialize three pointers:  
  - `prev = null`  
  - `current = head`  
  - `next = null`  
- Traverse the list:  
  - Store next node in `next`  
  - Point `current.next` → `prev`  
  - Move `prev` → `current`  
  - Move `current` → `next`  
- Finally set `head = prev`  

---
## 👀 Visual
[╔════════════════╗
║ 🖥️ Test Code ║
╚════════════════╝ ](./docs/reverse-test.PNG)
>
[╔══════════════╗
║ 🖥️ Console Log║
╚══════════════╝ ](./docs/reverse-console.PNG)
 >

---
## ⏱️ **Big O Complexity** ⚡

The table below summarizes the **time and space complexity** of the Reverse Linked List operation:

| 🔹 Operation | ⏳ Time Complexity | 💾 Space Complexity | 💡 Notes |
|-------------|-----------------|------------------|----------|
| **🔄 Reverse** | O(n) | O(1) | In-place reversal, no extra memory |

> ⚠️ `n` = number of nodes in the linked list  
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

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  reverse() {
    let prev = null;
    let current = this.head;
    let next = null;

    while (current !== null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    this.head = prev;
  }

  print() {
    let curr = this.head;
    let result = "";
    while (curr) {
      result += curr.data + " -> ";
      curr = curr.next;
    }
    return result + "null";
  }
}

// ✅ Example Usage
const list = new LinkedList();
list.insertFirst(1);
list.insertFirst(2);
list.insertFirst(3);

console.log("Original:", list.print());
list.reverse();
console.log("Reversed:", list.print());