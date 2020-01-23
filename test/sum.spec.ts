import { expect } from "chai";
import "mocha";
import { generateList } from "../src/index";

describe("generateList", function() {
  it("generateList undefined", () => {
    expect(JSON.stringify(generateList(10))).to.equal(JSON.stringify([undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]));
  });

  it("generateList number", () => {
    expect(JSON.stringify(generateList(10, i => i))).to.equal(JSON.stringify([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
  });

  it("generateList string", () => {
    expect(JSON.stringify(generateList(10, i => "a"))).to.equal(JSON.stringify(["a", "a", "a", "a", "a", "a", "a", "a", "a", "a"]));
  });

  it("generateList boolean", () => {
    expect(JSON.stringify(generateList(10, i => i % 2 === 0))).to.equal(JSON.stringify([true, false, true, false, true, false, true, false, true, false]));
  });

  it("generateList object", () => {
    expect(
      JSON.stringify(
        generateList(2, i => ({
          index: i,
          name: `name${i}`
        }))
      )
    ).to.equal(
      JSON.stringify([
        {
          index: 0,
          name: "name0"
        },
        {
          index: 1,
          name: "name1"
        }
      ])
    );
  });
});
