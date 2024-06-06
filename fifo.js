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

}

export default Fifo;
