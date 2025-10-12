# 🌳 Binary Tree & Binary Search Tree Implementation

---

## 📚 **Overview**

A **Binary Tree** is a hierarchical data structure where each node has at most **two children**:
- **Left Child**
- **Right Child**

A **Binary Search Tree (BST)** is a special type of binary tree where:
- The **left child** contains values **less than** the parent.
- The **right child** contains values **greater than** the parent.

---

## 🧩 **Class Structure**

### **1️⃣ TNode Class**

Each node in the tree contains:
- `data` → the value stored
- `left` → reference to the left child node
- `right` → reference to the right child node

---

| 🔹 Operation          | ⏳ Time | 💾 Space | 🧠 Description            |
| --------------------- | ------ | -------- | ------------------------- |
| **Add**               | O(h)   | O(1)     | h = height of the tree    |
| **Search (contains)** | O(h)   | O(1)     | Search path down the tree |
| **Remove**            | O(h)   | O(1)     | Handles node re-linking   |
| **Traversals**        | O(n)   | O(n)     | Visit every node once     |
| **Print**             | O(n)   | O(n)     | Display structure         |


## 👀 Visual

[╔══════════════╗
║ 🖥️ Console Log║
╚══════════════╝ ](./images/tree-implementation-console.PNG)
 >
---