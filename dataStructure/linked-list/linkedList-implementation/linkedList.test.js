const LinkedList = require("./linkedList");
describe('LinkedList', () => {
  test("should adds nodes correctly", () => {
    const newNode = new LinkedList();
    newNode.addNode(10);
    newNode.addNode(20);
    expect(newNode.printLinkedlist()).toBe("20->10->null");
  });
});
test("should delete node from linked list", () => {
    const newNode = new LinkedList();
    newNode.addNode(10);
    newNode.addNode(20);
    newNode.addNode(30);
    newNode.removeNode(20);
    expect(newNode.printLinkedlist()).toBe("30->10->null");
  });
  test("should insert at specific index", () => {
    const newNode = new LinkedList();
    newNode.addNode(10);
    newNode.addNode(30);
    newNode.insertAt(1, 20);
    expect(newNode.printLinkedlist()).toBe("30->20->10->null");
  });

  test("should check data if exist in the linked list", () => {
    let list = new LinkedList();
    list.addNode(10);
    list.addNode(20);
    expect(list.includesData(20)).toBe(true);
    expect(list.includesData(50)).toBe(false);
  });

