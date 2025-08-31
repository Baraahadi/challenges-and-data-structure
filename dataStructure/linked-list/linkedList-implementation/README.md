# 📝 Linked List Assignment

---

## **Problem Domain**
A **Linked List** is a dynamic data structure consisting of nodes where each node contains:

- **Data:** The value stored in the node.
- **Pointer:** A reference to the next node in the list.


**Supported Operations:**

1. **➕ Insert** – At beginning
2. **❌ Delete** – By value
3. **🔍 Search** – Find a specific value
4. **📜 Display** – Print elements in order


---

## 🎯 Input
Operations that can be performed on the linked list:

| Operation | Example | Description |
|-----------|---------|-------------|
| Insert    | `Insert 10` | Add a node with value `10` at the first by default |
| Insert at Index | `Insert 20 at index 1` | Add a node at a specific position |
| Delete    | `Delete 15` | Remove first node with value `15` |
| Search    | `Search 30` | Find value `30` in the list |
| Display   | `Display` | Print all nodes sequentially |

---

## 🖥️ Expected Output
- **After Insertions:** 10 -> 20 -> 30 -> null
- **After Deletion:**
  - Success: `Node with value 20 deleted.`
  - Not Found: `Value 50 not found in the list.`
- **After Search:**
  - Found: `Value 30 found at index 2.`
  - Not Found: `Value not found in the list.`
- **Display Empty List:** `The linked list is empty.`

---

## ⚠️ **Edge Cases**

Here are some special scenarios to consider when working with a Linked List:

- **🟢 Empty List:**  
  - Deleting or searching in an empty list should **return a message**:  
    `"The linked list is empty."`

- **🔴 Duplicate Values:**  
  - Deleting a value should remove **only the first occurrence** 

- **🟣 Large Lists:**  
  - Implementation must handle **large numbers of nodes efficiently** without performance issues.  


---
## 🧠 **Algorithms**

### **➕ Insert**
- **🟢 At Head:**  
  - Create a new node  
  - Set its `next` to current head  
  - Update head to new node  

---

### **❌ Delete**
- **By Value:**  
  - If head matches → update head  
  - Else → traverse → update previous node's `next` to skip the target node  

---

### **🔍 Search**
- Traverse from head  
- Compare each node's value  
- Return index if found, else indicate not found  

---

### **📜 Display**
- Traverse from head  
- Append each node's value in order  
- Stop at `null` to indicate the end of the list  

---
## 👀 Visual
[╔════════════════╗
║ 🖥️ Test Code ║
╚════════════════╝ ](./docs/linkedlist-imp-tests.PNG)
>
[╔══════════════╗
║ 🖥️ Console Log║
╚══════════════╝ ](./docs/console-linkedlist-output.PNG)
 >
---



## ⏱️ **Big O Complexity** ⚡

The table below summarizes the **time and space complexity** of all Linked List operations in a visually clear style:

| 🔹 Operation | ⏳ Time Complexity | 💾 Space Complexity | 💡 Notes |
|-------------|-----------------|------------------|----------|
| **➕ Insert at Head** | O(1) | O(1) | Fastest insertion, no traversal needed |
| **❌ Delete by Value** | O(n) | O(1) | Need to search for value first |
| **🔍 Search** | O(n) | O(1) | Linear search from head |
| **📜 Display** | O(n) | O(1) | Prints all nodes sequentially |

> ⚠️ `n` = number of nodes in the linked list  
---

## 💻 **JavaScript Implementation Example**

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
    this.length = 0;
  }

  // Add a node at the head
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

  // Print all nodes
  printLinkedlist() {
    let item = this.head;
    let result = "";

    while (item) {
      result = result + item.data + "->";
      item = item.next;
    }
    return result + "null";
  }

  // Remove a node by value
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

  // Check if a value exists
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

  // Insert a node at a specific index
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

// ✅ Example Usage
const newNode = new LinkedList(); 
newNode.addNode(5); 
newNode.addNode(10); 
newNode.addNode(20); 
newNode.addNode(30); 
newNode.removeNode(10); 
newNode.includesData(20); 
newNode.insertAt(2, 50); 
console.log(newNode.printLinkedlist());