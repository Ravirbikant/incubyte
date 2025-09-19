import { add } from "./add.js";

describe("String Calculator", () => {
  it("should return 0 for empty string", () => {
    const result = add("");
    expect(result).toBe(0);
  });
});
