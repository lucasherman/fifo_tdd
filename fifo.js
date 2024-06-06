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
    this.size -= 1;
  }

  getSize() {
    return this.size;
  }

}

export default Fifo;
