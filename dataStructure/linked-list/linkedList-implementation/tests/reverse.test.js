const LinkedList = require("../linkedList");
describe('LinkedList', () => {
  test("should reverse nodes correctly", () => {
    const newNode = new LinkedList();
    newNode.addNode(10);
    newNode.addNode(20);
    newNode.reverse();
    expect(newNode.printLinkedlist()).toBe("10->20->null");
  });

    test("should remain it at it is", () => {
    const newNode = new LinkedList();
    newNode.addNode(10);
    newNode.reverse();
    expect(newNode.printLinkedlist()).toBe("10->null");
  });
    test("should remain it at it is", () => {
    const newNode = new LinkedList();
    newNode.reverse();
    expect(newNode.printLinkedlist()).toBe("null");
  });
   test("should reverse it with duplicate values", () => {
    const newNode = new LinkedList();
    newNode.addNode(10);
    newNode.addNode(20);
    newNode.addNode(20);
    newNode.addNode(30);

    newNode.reverse();
    expect(newNode.printLinkedlist()).toBe("10->20->20->30->null");
  });
});