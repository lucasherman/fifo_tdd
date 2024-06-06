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

}

export default Fifo;
