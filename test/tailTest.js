const tail = require("../tail.js");
const assert = require("chai").assert;

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), [
      "Lighthouse",
      "Labs",
    ]);
  });

  it("returns [2, 3, 4, 5, 6] for [1,2,3,4,5,6]", () => {
    assert.deepEqual(tail([1, 2, 3, 4, 5, 6]), [2, 3, 4, 5, 6]);
  });

  it("returns [] for ['oranges']", () => {
    assert.deepEqual(tail(["organges"]), []);
  });

  it("returns [] for ['apples', 4, 'bananas']", () => {
    assert.deepEqual(tail(["oragnes", 4, "bananas"]), [4, "bananas"]);
  });
});
