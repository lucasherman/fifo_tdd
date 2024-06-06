class Fifo {
  constructor() {
    this.size = 0;
    this.stack = [];
  }

  isEmpty() {
    return this.size === 0;
  }

  push(element) {
    this.stack.push(element);
    this.size += 1;
  }

  pop() {
    if (this.size <= 0) {
      throw RangeError("Cannot pop an empty stack")
    }
    this.size -= 1;
    return this.stack.pop();
  }

  getSize() {
    return this.size;
  }

}

export default Fifo;
