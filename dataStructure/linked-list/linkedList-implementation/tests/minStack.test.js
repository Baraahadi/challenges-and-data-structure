const MinStack = require("../../../stack&queue/stack&queue-implementation/minStack/minStack");

describe("MinStack", () => {
  let stack;

  beforeEach(() => {
    stack = new MinStack();
  });

  test("should start empty", () => {
    expect(stack.isEmpty()).toBe(true);
    expect(stack.top()).toBeNull();
    expect(stack.getMin()).toBeNull();
  });

  test("should push and return top correctly", () => {
    stack.push(10);
    expect(stack.top()).toBe(10);

    stack.push(20);
    expect(stack.top()).toBe(20);

    stack.push(5);
    expect(stack.top()).toBe(5);
  });

  test("should track minimum correctly", () => {
    stack.push(3);
    stack.push(5);
    expect(stack.getMin()).toBe(3);

    stack.push(2);
    stack.push(2);
    expect(stack.getMin()).toBe(2);

    stack.pop();
    expect(stack.getMin()).toBe(2);

    stack.pop();
    expect(stack.getMin()).toBe(3);
  });

  test("should pop elements correctly", () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
    expect(stack.pop()).toBeNull();
  });
});
