import Fifo from './fifo.js'

describe("fifo tests", () => {
  it("nothing", () => {

  });

  it("created fifo stack", () => {
    const fifo = new Fifo();
  });

  it("checks stack is empty", () => {
    const fifo = new Fifo();
    expect(fifo.isEmpty()).toBeTruthy()
  });

  it("after push is not empty", () => {
    const fifo = new Fifo();
    fifo.push('element 1');
    expect(fifo.isEmpty()).toBeFalsy()
  });

  it("after pop is empty", () => {
    const fifo = new Fifo();
    fifo.push('element 1');
    fifo.pop()
    expect(fifo.isEmpty()).toBeTruthy()
  });

  it("after two pushes size is two, after three pushes size is 3", () => {
    const fifo = new Fifo();
    fifo.push();
    fifo.push();
    expect(fifo.getSize()).toBe(2);
    fifo.push();
    expect(fifo.getSize()).toBe(3);
  });

  it("popping empty stack throws Range Error", () => {
    const fifo = new Fifo();
    expect(fifo.isEmpty()).toBeTruthy();
    expect(() => fifo.pop()).toThrow(RangeError);
  });

  it("pushes the element and pop the same element", () => {
    const fifo = new Fifo();
    fifo.push('element 1');
    expect(fifo.pop()).toEqual('element 1');
  });

  it("pushes three elements and pops the same elements", () => {
    const fifo = new Fifo();
    const elements = ['el1', 'el2', 'el3'];
    elements.forEach(element => fifo.push(element));
    const resultElements = elements.map(element => fifo.pop());
    elements.forEach(element => expect(resultElements.includes(element)).toBeTruthy());
  });

  it("pushes three elements and pops the same elements in the correct order", () => {
    const fifo = new Fifo();
    const elements = ['element 1', 'element 2', 'element 3'];
    elements.forEach(element => fifo.push(element));
    expect(fifo.pop()).toEqual('element 1');
    expect(fifo.pop()).toEqual('element 2');
    expect(fifo.pop()).toEqual('element 3');
  });

});
