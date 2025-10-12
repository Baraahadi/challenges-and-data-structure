const { TNode, BinaryTree, BinarySearchTree } = require("./binaryTree"); 

describe("BinaryTree Traversal Tests", () => {
  let tree;

  beforeEach(() => {
    tree = new BinaryTree();
    tree.root = new TNode(1);
    tree.root.left = new TNode(2);
    tree.root.right = new TNode(3);
    tree.root.left.left = new TNode(4);
    tree.root.left.right = new TNode(5);
  });

  test("PreOrder traversal should visit nodes in Root, Left, Right order", () => {
    const result = [];
    const spy = jest.spyOn(console, "log").mockImplementation((v) => result.push(v));
    tree.preOrder();
    expect(result).toEqual([1, 2, 4, 5, 3]);
    spy.mockRestore();
  });

  test("InOrder traversal should visit nodes in Left, Root, Right order", () => {
    const result = [];
    const spy = jest.spyOn(console, "log").mockImplementation((v) => result.push(v));
    tree.inOrder();
    expect(result).toEqual([4, 2, 5, 1, 3]);
    spy.mockRestore();
  });

  test("PostOrder traversal should visit nodes in Left, Right, Root order", () => {
    const result = [];
    const spy = jest.spyOn(console, "log").mockImplementation((v) => result.push(v));
    tree.postOrder();
    expect(result).toEqual([4, 5, 2, 3, 1]);
    spy.mockRestore();
  });
});

describe("BinarySearchTree Functionality Tests", () => {
  let bst;

  beforeEach(() => {
    bst = new BinarySearchTree();
  });

  test("should add nodes correctly", () => {
    bst.add(10);
    bst.add(5);
    bst.add(15);
    bst.add(2);
    bst.add(7);

    expect(bst.root.data).toBe(10);
    expect(bst.root.left.data).toBe(5);
    expect(bst.root.right.data).toBe(15);
    expect(bst.root.left.left.data).toBe(2);
    expect(bst.root.left.right.data).toBe(7);
  });

  test("contains() should return true if value exists, otherwise false", () => {
    [10, 5, 15].forEach((v) => bst.add(v));
    expect(bst.contains(15)).toBe(true);
    expect(bst.contains(99)).toBe(false);
  });

  test("remove() should remove a leaf node", () => {
    [10, 5, 15, 2].forEach((v) => bst.add(v));
    bst.remove(2);
    expect(bst.contains(2)).toBe(false);
  });

  test("remove() should remove node with one child", () => {
    [10, 5, 15, 12].forEach((v) => bst.add(v));
    bst.remove(15);
    expect(bst.contains(15)).toBe(false);
    expect(bst.root.right.data).toBe(12);
  });

  test("remove() should remove node with two children", () => {
    [10, 5, 15, 12, 18, 11].forEach((v) => bst.add(v));
    bst.remove(15);
    expect(bst.contains(15)).toBe(false);
    expect(bst.contains(12)).toBe(true);
  });
});
