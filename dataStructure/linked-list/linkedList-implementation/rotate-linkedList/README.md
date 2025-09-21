# 🔄 Rotate Linked List Assignment

---

## **Problem Domain**
A **Linked List** is a dynamic data structure consisting of nodes where each node contains:

- **Data:** The value stored in the node.  
- **Pointer:** A reference to the next node in the list.  

Here we add a new operation:

1. **🔄 Rotate (k)** – Rotate the linked list **to the left by k places**.  

After rotation, the node which was originally at position `k` will now become the **head** of the list, and the remaining nodes will follow.

---

## 🎯 Input
Operations that can be performed on the linked list:

| Operation | Example | Description |
|-----------|---------|-------------|
| Rotate    | `rotateLeft(k)` | Rotates the linked list left by `k` positions |

---

## 🖥️ Expected Output
- **Original List:** `1 -> 2 -> 3 -> 4 -> 5 -> null`  
- **Rotate Left by 2:** `3 -> 4 -> 5 -> 1 -> 2 -> null`  

---

## ⚠️ **Edge Cases**
- **🟢 Empty List:** Rotating does nothing.  
- **🟠 k = 0 or multiple of length:** List remains unchanged.  
- **🔴 k > length:** Use `k % length` to rotate efficiently.  

---

## 🧠 **Algorithm**

### **🔄 Rotate Left**
1. Find the length of the linked list.  
2. Handle the case when `k` is greater than length → `k = k % length`.  
3. Traverse to the `k`th node.  
4. Break the list from there and make the `k+1`th node the new head.  
5. Connect the old tail to the old head.  

---

**Time Complexity:** O(n), **Space Complexity:** O(1)

## 👀 Visual
[╔════════════════╗  
║ 🖥️ Test Code    ║  
╚════════════════╝ ](../docs/rotate-test.PNG)  
>  
[╔══════════════╗  
║ 🖥️ Console Log ║  
╚══════════════╝ ](../docs/rotate-console.PNG)  
>  

## 💻 Code Implementation

👉 [View Full Code Here](./rotate.js)