# 📝 Stack & Queue Assignment  

---  

## **Problem Domain**  

We will implement two fundamental **linear data structures** in JavaScript:  

### **📚 Stack (LIFO – Last In, First Out)**  
- **push(element):** Insert element on top  
- **pop():** Remove element from top  
- **peek():** Get top element without removing  
- **isEmpty():** Check if stack is empty  

### **📥 Queue (FIFO – First In, First Out)**  
- **enqueue(element):** Insert element at rear  
- **dequeue():** Remove element from front  
- **peek():** Get front element without removing  
- **isEmpty():** Check if queue is empty  

---  

## 🎯 Input  

Operations that can be performed:  

| Data Structure | Operation | Example | Description |  
|----------------|-----------|---------|-------------|  
| **Stack** | Push | `push(10)` | Adds `10` on top |  
|              | Pop | `pop()` | Removes element from top |  
|              | Peek | `peek()` | Returns top element |  
|              | isEmpty | `isEmpty()` | Checks if stack is empty |  
| **Queue** | Enqueue | `enqueue(10)` | Adds `10` at rear |  
|              | Dequeue | `dequeue()` | Removes element from front |  
|              | Peek | `peek()` | Returns front element |  
|              | isEmpty | `isEmpty()` | Checks if queue is empty |  

---  

## 🖥️ Expected Output  

### **Stack Example:**  
- Push: `10, 20, 30` → Top is `30`  
- Pop: removes `30` → New top is `20`  

### **Queue Example:**  
- Enqueue: `10, 20, 30` → Front is `10`  
- Dequeue: removes `10` → New front is `20`  


---  

## ⚠️ **Edge Cases**  

- **🟢 Empty Stack/Queue:**  
  - `pop()` or `dequeue()` should return `"empty"` message  
  - `peek()` should return `"empty"` message  

- **🟠 Single Element:**  
  - Works correctly for push/enqueue then pop/dequeue  

- **🔴 Multiple Elements:**  
  - Ensure order follows **LIFO for Stack** and **FIFO for Queue**  

---  

## 🧠 **Algorithms**  

### **📚 Stack**  
- Maintain `count` and `data`  
- `push`: add element at `data[count]`, then increment count  
- `pop`: decrement count, return element  
- `peek`: return `data[count-1]`  
- `isEmpty`: check if `count === 0`  

### **📥 Queue**  
- Maintain `data`, `front`, and `rear`  
- `enqueue`: insert at `data[rear]`, increment `rear`  
- `dequeue`: return `data[front]`, increment `front`  
- `peek`: return `data[front]`  
- `isEmpty`: check if `front === rear`  

---  

## 👀 Visual  

[╔════════════════╗  
║ 🖥️ Test Code ║  
╚════════════════╝ ](./images/stack-console.PNG)  

>  

[╔══════════════╗  
║ 🖥️ Console Log║  
╚══════════════╝ ](./images/queue-console.PNG)  
>  

---  

## ⏱️ **Big O Complexity** ⚡  

| Data Structure | Operation | ⏳ Time Complexity | 💾 Space Complexity | 💡 Notes |  
|----------------|------------|------------------|-------------------|----------|  
| **Stack** | Push/Pop/Peek | O(1) | O(n) | Constant time operations |  
| **Queue** | Enqueue/Dequeue/Peek | O(1) | O(n) | Front/Rear tracked with pointers |  

> ⚠️ `n` = number of elements in the stack or queue  
