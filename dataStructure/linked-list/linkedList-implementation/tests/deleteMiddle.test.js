const Stack = require("../../../stack&queue/stack&queue-implementation/deleteFromStack/deleteMiddle");

describe("Stack with deleteMiddle", () => {
  test("delete middle in odd-sized stack", () => {
    let s = new Stack();
    [1, 2, 3, 4, 5].forEach(v => s.push(v));

    s.deleteMiddle();

    expect(Object.values(s.data)).toEqual([1, 2, 4, 5]);
  });

  test("delete middle in even-sized stack", () => {
    let s = new Stack();
    [10, 20, 30, 40].forEach(v => s.push(v));

    s.deleteMiddle();

    expect(Object.values(s.data)).toEqual([10, 30, 40]); 
  });

  test("delete middle in single element stack", () => {
    let s = new Stack();
    s.push(99);

    s.deleteMiddle();

    expect(Object.values(s.data)).toEqual([]); 
  });

  test("delete middle in empty stack", () => {
    let s = new Stack();

    s.deleteMiddle();

    expect(Object.values(s.data)).toEqual([]); 
  });
});
