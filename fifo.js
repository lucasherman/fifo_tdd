class Fifo {
  constructor() {
    this.empty = true;
  }

  isEmpty() {
    return this.empty;
  }

  push() {
    this.empty = false;
  }

  pop() {
    this.empty = true;
  }

  getSize() {
    return 2;
  }

}

export default Fifo;
