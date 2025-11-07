const { BinaryTree, Node } = require("../leaf-sum/leaf-sum");

describe("SumOfLeafNodes", () => {
  test("returns correct sum of all leaf nodes", () => {
    let Btree = new BinaryTree();
    Btree.root = new Node(9);
    Btree.root.left = new Node(8);
    Btree.root.right = new Node(12);

    Btree.root.left.left = new Node(3);
    Btree.root.left.right = new Node(7);

    Btree.root.right.left = new Node(17);
    Btree.root.right.right = new Node(23);

    Btree.root.left.left.right = new Node(4);

    const result = Btree.SumOfLeafNodes();
    expect(result).toBe(51);
  });

  test("returns 0 for an empty tree", () => {
    let Btree = new BinaryTree();
    expect(Btree.SumOfLeafNodes()).toBe(0);
  });

  test("returns root value if only one node exists", () => {
    let Btree = new BinaryTree();
    Btree.root = new Node(10);
    expect(Btree.SumOfLeafNodes()).toBe(10);
  });
});
