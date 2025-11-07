# 🌳 Binary Tree – Leaf Sum Challenge

---

## 📚 **Overview**

A **Binary Tree** is a hierarchical data structure where each node has at most **two children**:

- **Left Child**
- **Right Child**

In this challenge, you will implement a method to calculate the **sum of all leaf nodes** in a binary tree.

A **leaf node** is a node that has:
✅ **No left child**  
✅ **No right child**

---

## 🧩 **Class Structure**

### **1️⃣ TNode Class**

Each node in the tree contains:

- `data` → the value stored in the node
- `left` → reference to the left child
- `right` → reference to the right child

---

### **2️⃣ BinaryTree Class**

Your BinaryTree class must include a method:

### ✅ **LeafSum()**

- Traverses the tree
- Detects all leaf nodes
- Returns the **total sum** of all leaf values
- Must handle empty trees gracefully

---

## 📌 Challenge Requirements

| 🔹 Task                     | ✅ Description                         |
| --------------------------- | -------------------------------------- |
| **Implement `LeafSum()`**   | Calculates the sum of leaf node values |
| **Identify leaf nodes**     | Leaf = node with _no children_         |
| **Traverse the tree**       | Use DFS (recursive) or BFS             |
| **Return correct sum**      | Add values of all detected leaves      |
| **Show example in console** | Demonstrate usage with output          |

---

## ⏳ Performance

| 🔹 Operation  | ⏳ Time | 💾 Space | 🧠 Description                            |
| ------------- | ------- | -------- | ----------------------------------------- |
| **LeafSum()** | O(n)    | O(h)     | Visit every node once; h = height of tree |
| **Traversal** | O(n)    | O(n)     | Worst-case deep recursion stack           |

---

## 🖼️ Console Output Image

You can view the console result of running the Leaf Sum method here:

🔗 **Console Output Screenshot:**  
[Click here to view the console output image](./leaf-sum-console.PNG)

---
