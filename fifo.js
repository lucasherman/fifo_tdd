class Fifo {
  constructor() {
    this.size = 0;
    this.element = null;
  }

  isEmpty() {
    return this.size === 0;
  }

  push(element) {
    this.element = element;
    this.size += 1;
  }

  pop() {
    if (this.size <= 0) {
      throw RangeError("Cannot pop an empty stack")
    }
    this.size -= 1;
    return this.element;
  }

  getSize() {
    return this.size;
  }

}

export default Fifo;
