# 📝 Delete Middle Element from Stack Assignment  

---  

## **Problem Domain**  

We will implement a method in JavaScript to **delete the middle element of a stack**.  
If the stack has an **even number of elements**, we remove the **lower middle** element.  

### **📚 Stack (LIFO – Last In, First Out)**  
- **push(element):** Insert element on top  
- **pop():** Remove element from top  
- **peek():** Get top element without removing  
- **isEmpty():** Check if stack is empty  
- **deleteMiddle():** Delete the middle element (lower middle if even)  
- **printStack():** Print contents of the stack  

---  

## 🎯 Input  

Operations that can be performed:  

| Operation       | Example            | Description |  
|-----------------|--------------------|-------------|  
| Push            | `push(10)`         | Adds `10` on top |  
| Pop             | `pop()`            | Removes element from top |  
| Peek            | `peek()`           | Returns top element |  
| isEmpty         | `isEmpty()`        | Checks if stack is empty |  
| deleteMiddle    | `deleteMiddle()`   | Removes middle element |  
| printStack      | `printStack()`     | Displays all elements |  

---  

# 📝 Delete Middle Element from Stack Assignment  

---  

## **Problem Domain**  

We will implement a method in JavaScript to **delete the middle element of a stack**.  
If the stack has an **even number of elements**, we remove the **lower middle** element.  

### **📚 Stack (LIFO – Last In, First Out)**  
- **push(element):** Insert element on top  
- **pop():** Remove element from top  
- **peek():** Get top element without removing  
- **isEmpty():** Check if stack is empty  
- **deleteMiddle():** Delete the middle element (lower middle if even)  
- **printStack():** Print contents of the stack  

---  

## 🎯 Input  

Operations that can be performed:  

| Operation       | Example            | Description |  
|-----------------|--------------------|-------------|  
| Push            | `push(10)`         | Adds `10` on top |  
| Pop             | `pop()`            | Removes element from top |  
| Peek            | `peek()`           | Returns top element |  
| isEmpty         | `isEmpty()`        | Checks if stack is empty |  
| deleteMiddle    | `deleteMiddle()`   | Removes middle element |  
| printStack      | `printStack()`     | Displays all elements |  

---  

## 🖥️ Expected Output  

### **Example 1 (Odd number of elements):**  
- Push: `1, 2, 3, 4, 5` → Stack = `[1, 2, 3, 4, 5]`  
- `deleteMiddle()` → removes `3` → New Stack = `[1, 2, 4, 5]`  

### **Example 2 (Even number of elements):**  
- Push: `10, 20, 30, 40` → Stack = `[10, 20, 30, 40]`  
- `deleteMiddle()` → removes `20` (lower middle) → New Stack = `[10, 30, 40]`  

---  
## ⚠️ **Edge Cases**  

- **🟢 Empty Stack:**  
  - `deleteMiddle()` should do nothing or return `"stack is empty"`  

- **🟠 Single Element:**  
  - After `deleteMiddle()`, the stack becomes empty  

- **🔴 Multiple Elements:**  
  - Ensure order follows **LIFO** and only the correct middle element is removed  

---  
## 👀 Visual  

[╔════════════════╗  
║ 🖥️ Test Code ║  
╚════════════════╝ ](./images/delete-test.PNG)  

>  

[╔══════════════╗  
║ 🖥️ Console Log║  
╚══════════════╝ ](./images/delete-console.PNG)  

---  
## 🧠 **Algorithm**  

We use **recursion** to access the middle element and remove it while maintaining the order of the stack.  

### Steps:  
1. Find the middle index: `midIndex = Math.floor((n - 1) / 2)`  
2. Pop elements from the stack until reaching the middle index  
3. Remove the middle element  
4. Push the popped elements back in order  

---  
## ⏱️ **Big O Complexity** ⚡  

| Operation       | ⏳ Time Complexity | 💾 Space Complexity | 💡 Notes |  
|-----------------|-------------------|--------------------|----------|  
| Push            | O(1)              | O(n)               | Constant time insert |  
| Pop             | O(1)              | O(n)               | Constant time remove |  
| Peek            | O(1)              | O(n)               | Access last element |  
| isEmpty         | O(1)              | O(1)               | Simple check |  
| deleteMiddle    | O(n)              | O(n)               | Recursive removal requires traversing half of stack |  

> ⚠️ `n` = number of elements in the stack  