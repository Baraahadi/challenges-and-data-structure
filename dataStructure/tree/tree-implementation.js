class TNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

//  Binary Tree Implementation
class BinaryTree {
  constructor() {
    this.root = null;
  }
  preOrder(node = this.root) {
    if (!node) return;
    console.log(node.data);
    this.preOrder(node.left);
    this.preOrder(node.right);
  }

  inOrder(node = this.root) {
    if (!node) return;
    this.inOrder(node.left);
    console.log(node.data);
    this.inOrder(node.right);
  }

  postOrder(node = this.root) {
    if (!node) return;
    this.postOrder(node.left);
    this.postOrder(node.right);
    console.log(node.data);
  }

  print(node = this.root, prefix = "", isLeft = true) {
    if (node) {
      console.log(prefix + (isLeft ? "├── " : "└── ") + node.data);
      this.print(node.left, prefix + (isLeft ? "│   " : "    "), true);
      this.print(node.right, prefix + (isLeft ? "│   " : "    "), false);
    }
  }
}

//  Binary Search Tree Implementation
class BinarySearchTree extends BinaryTree {
  constructor() {
    super();
  }


  add(value) {
    const newNode = new TNode(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }

    let current = this.root;
    while (true) {
      if (value < current.data) {
        if (!current.left) {
          current.left = newNode;
          break;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          break;
        }
        current = current.right;
      }
    }
  }

  contains(value) {
    let current = this.root;
    while (current) {
      if (value === current.data) return true;
      current = value < current.data ? current.left : current.right;
    }
    return false;
  }

  remove(value, node = this.root) {
    if (!node) return null;

    if (value < node.data) {
      node.left = this.remove(value, node.left);
    } else if (value > node.data) {
      node.right = this.remove(value, node.right);
    } else {
      // Node found
      if (!node.left && !node.right) return null;
      if (!node.left) return node.right;
      if (!node.right) return node.left;

      // Two children: find inorder successor
      let successor = node.right;
      while (successor.left) {
        successor = successor.left;
      }
      node.data = successor.data;
      node.right = this.remove(successor.data, node.right);
    }
    return node;
  }
}

//  Example Usage
const bst = new BinarySearchTree();
bst.add(10);
bst.add(5);
bst.add(15);
bst.add(2);
bst.add(7);

console.log("In-order Traversal:");
bst.inOrder();

console.log("\nTree Structure:");
bst.print();

console.log("\nContains 7?", bst.contains(7)); // true
bst.remove(5);
console.log("\nAfter removing 5:");
bst.print();
