const LinkedList = require("../linkedList");
describe("LinkedList", () => {
  test("should rotate nodes correctly", () => {
    const newNode = new LinkedList();
    newNode.addNode(1);
    newNode.addNode(2);
    newNode.addNode(3);
    newNode.addNode(4);
    newNode.addNode(5);
    newNode.rotateLeft(2);

    expect(newNode.printLinkedlist()).toBe("3->2->1->5->4->null");
  });
});
