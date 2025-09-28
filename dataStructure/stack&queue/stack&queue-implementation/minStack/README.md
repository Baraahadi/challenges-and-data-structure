# 📝 MinStack Assignment  

---  

## **Problem Domain**  

We will implement a special type of **Stack** in JavaScript called **MinStack**, which supports standard stack operations along with an additional operation to get the minimum element in **O(1)** time.  

### **📚 MinStack (LIFO – Last In, First Out)**  
- **push(element):** Insert element on top  
- **pop():** Remove element from top  
- **top():** Get top element without removing  
- **isEmpty():** Check if stack is empty  
- **getMin():** Retrieve the minimum element in constant time  
- **printStack():** Print contents of the stack  

---  

## 🎯 Input  

Operations that can be performed:  

| Operation  | Example       | Description |  
|------------|--------------|-------------|  
| Push       | `push(10)`   | Adds `10` on top |  
| Pop        | `pop()`      | Removes element from top |  
| Top        | `top()`      | Returns top element |  
| isEmpty    | `isEmpty()`  | Checks if stack is empty |  
| getMin     | `getMin()`   | Returns smallest element |  
| printStack | `printStack()` | Displays all elements |  

---  

## 🖥️ Expected Output  

### **Example:**  
- Push: `5, 2, 10, 1` → Top is `1`, Min is `1`  
- Pop: removes `1` → New top is `10`, New min is `2`  

---  

## ⚠️ **Edge Cases**  

- **🟢 Empty Stack:**  
  - `pop()`, `top()`, or `getMin()` should return `"null"` or a message `"stack is empty"`  

- **🟠 Single Element:**  
  - Works correctly for push then pop  

- **🔴 Multiple Elements:**  
  - Ensure order follows **LIFO** and `getMin()` always returns correct minimum  

---  


## 👀 Visual  

[╔════════════════╗  
║ 🖥️ Test Code ║  
╚════════════════╝ ](./images/minStack-test.PNG)  

>  

[╔══════════════╗  
║ 🖥️ Console Log║  
╚══════════════╝ ](./images/minStack-console.PNG)  
>  

---  

## 🧠 **Algorithm**  

We maintain **two stacks**:  
1. **stack:** to store all elements  
2. **minStack (auxiliary stack):** to store the minimums  

### Steps:  
- **push(value):**  
  - Push to `stack`  
  - If `minStack` is empty or value ≤ last element in `minStack`, push to `minStack` too  

- **pop():**  
  - Remove top element from `stack`  
  - If removed element == top of `minStack`, remove it from `minStack`  

- **top():** Return top of `stack`  

- **isEmpty():** Return `true` if `stack` is empty  

- **getMin():** Return top of `minStack` in **O(1)**  

- **printStack():** Print all elements of `stack`  

---  


---  

## ⏱️ **Big O Complexity** ⚡  

| Operation | ⏳ Time Complexity | 💾 Space Complexity | 💡 Notes |  
|-----------|------------------|-------------------|----------|  
| Push      | O(1) | O(n) | Constant time insert |  
| Pop       | O(1) | O(n) | Constant time remove |  
| Top       | O(1) | O(n) | Access last element |  
| isEmpty   | O(1) | O(1) | Check count |  
| getMin    | O(1) | O(n) | Top of minStack gives min directly |  

> ⚠️ `n` = number of elements in the stack  


