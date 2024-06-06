import Fifo from './fifo.js'

describe("fifo tests", () => {
  let fifo;

  it("nothing", () => {

  });

  it("created fifo stack", () => {
    fifo = new Fifo();
  });

  it("checks stack is empty", () => {
    expect(fifo.isEmpty()).toBeTruthy()
  });

});
