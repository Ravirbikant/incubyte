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

  it("should return the sum for two comma-separated numbers", () => {
    const result = add("1,5");
    expect(result).toBe(6);
  });

  it("should handle any amount of numbers", () => {
    const result = add("1,2,3");
    expect(result).toBe(6);
  });
});
