const findKeyByValue = require("../findKeyByValue");
const assert = require("chai").assert;

describe("# FindKeyByValue - Returns return the first key that contains a given value or undefined", () => {
  it("returns 'drama' for 'The Wire'", () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire",
    };
    const actual = findKeyByValue(bestTVShowsByGenre, "The Wire");
    const expected = "drama";
    assert.strictEqual(actual, expected);
  });

  it("returns undefined for 'That '70s Show'", () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire",
    };
    const actual = findKeyByValue(bestTVShowsByGenre, "That '70s Show");
    const expected = undefined;
    assert.strictEqual(actual, expected);
  });
});
