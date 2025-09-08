const LinkedList = require("../linkedList");
describe("LinkedList", () => {
  test("should sorting nodes correctly", () => {
    const newNode = new LinkedList();
    newNode.addNode(1);
    newNode.addNode(5);
    newNode.addNode(0);
    newNode.addNode(8);

    newNode.sortlist();
    expect(newNode.printLinkedlist()).toBe("0->1->5->8->null");
  });
  test("should sorting nodes correctly", () => {
    const newNode2 = new LinkedList();
    newNode2.addNode(0);
    newNode2.addNode(10);
    newNode2.addNode(20);
    newNode2.addNode(6);

    newNode2.sortlist();
    expect(newNode2.printLinkedlist()).toBe("0->6->10->20->null");
  });
  test("should merged two linkedlist correctly", () => {
    const newNode = new LinkedList();
    newNode.addNode(1);
    newNode.addNode(5);
    newNode.addNode(0);
    newNode.addNode(8);
    newNode.sortlist();

    const newNode2 = new LinkedList();
    newNode2.addNode(0);
    newNode2.addNode(10);
    newNode2.addNode(20);
    newNode2.addNode(6);
    newNode2.sortlist();

    const merged = LinkedList.mergeLists(newNode, newNode2);
    expect(merged.printLinkedlist()).toBe("0->0->1->5->6->8->10->20->null");
  });
});

///npx jest merge.test.js
