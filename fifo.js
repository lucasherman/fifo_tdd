class Fifo {
  constructor() {
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  push() {
    this.size += 1;
  }

  pop() {
    if (this.size <= 0) {
      throw RangeError("Cannot pop an empty stack")
    }
    this.size -= 1;
  }

  getSize() {
    return this.size;
  }

}

export default Fifo;
