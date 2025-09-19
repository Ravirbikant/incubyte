import { add } from "./add.js";

describe("String Calculator", () => {
  it("should return 0 for empty string", () => {
    const result = add("");
    expect(result).toBe(0);
  });

  it("should return the number for single number string", () => {
    const result = add("1");
    expect(result).toBe(1);
  });
});
