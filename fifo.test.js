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

});
