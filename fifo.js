class Fifo {
  constructor() {
    this.stack = [];
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  push(element) {
    this.stack.push(element);
  }

  pop() {
    if (this.stack.length <= 0) {
      throw RangeError("Cannot pop an empty stack")
    }
    return this.stack.shift();
  }

  getSize() {
    return this.stack.length;
  }

}

export default Fifo;
