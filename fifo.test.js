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

  it("after push is not empty", () => {
    fifo.push('element 1');
    expect(fifo.isEmpty()).toBeFalsy()
  });

  it("after pop is empty", () => {
    fifo.pop()
    expect(fifo.isEmpty()).toBeTruthy()
  })

});
