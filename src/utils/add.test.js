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

  it("should handle newlines between numbers", () => {
    const result = add("1\n2,3");
    expect(result).toBe(6);
  });

  it("should support custom delimiter", () => {
    const result = add("//;\n1;2");
    expect(result).toBe(3);
  });

  it("should support different custom delimiters", () => {
    const result = add("//|\n1|2|3");
    expect(result).toBe(6);
  });

  it("should throw exception for negative number", () => {
    expect(() => add("1,-2,3")).toThrow("negative numbers not allowed -2");
  });

  it("should throw exception for negative number with custom delimiter", () => {
    expect(() => add("//;\n1;-5;3")).toThrow("negative numbers not allowed -5");
  });

  it("should throw exception for negative number with newlines", () => {
    expect(() => add("1\n-3,2")).toThrow("negative numbers not allowed -3");
  });

  it("should throw exception for multiple negative numbers", () => {
    expect(() => add("1,-2,-4,5")).toThrow(
      "negative numbers not allowed -2,-4"
    );
  });

  it("should throw exception for multiple negative numbers with mixed delimiters", () => {
    expect(() => add("//;\n-1;2,-3\n-5")).toThrow(
      "negative numbers not allowed -1,-3,-5"
    );
  });
});
