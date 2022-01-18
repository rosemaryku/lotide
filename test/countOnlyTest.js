const assert = require("chai").assert;
const countOnly = require("../countOnly");

describe("#countOnly - Returns the count of specific items in a collection", () => {
  it("returns Jason in first position", () => {
    const firstName = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe",
    ];
    assert.strictEqual(
      countOnly(firstName, {
        Jason: true,
        Karima: true,
        Fang: true,
        Agouhanna: false,
      })["Jason"],
      1
    );
  });
});
