describe("multiplyArrays", () => {
  it("should correctly multiply two positive numbers - Case 1", () => {
    expect(multiplyArrays([9, 9, 9], [1, 1, 1])).toEqual("110889");
  });

  it("should correctly multiply two positive numbers - Case 2", () => {
    expect(multiplyArrays([1, 2, 3, 5], [4, 5, 6])).toEqual("563160");
  });

  it("should correctly multiply two positive numbers - Case 3", () => {
    expect(multiplyArrays([5], [2, 1, 3])).toEqual("1065");
  });

  it("should correctly multiply two positive numbers - Case 4", () => {
    expect(multiplyArrays([2, 1, 2], [2, 1, 2])).toEqual("44944");
  });

  it("should correctly multiply two positive numbers - Case 5", () => {
    expect(multiplyArrays([1, 2, 3], [0])).toEqual("0");
  });
  it("should throw an error if any element in the arrays is negative", function () {
    let array1 = [1, 2, -3];
    let array2 = [-4, 5, 6];
    expect(function () {
      multiplyArrays(array1, array2);
    }).toThrow(new Error("Please enter positive numbers only."));
  });

  it("should throw an error for empty arrays", function () {
    expect(function () {
      multiplyArrays([], []);
    }).toThrowError("Both input arrays contain all zeros.");
  });

  it("should throw an error if both input arrays contain all zeros", function () {
    expect(function () {
      multiplyArrays([0, 0, 0], [0, 0, 0]);
    }).toThrowError("Both input arrays contain all zeros.");
  });

  it("should throw an error if any element in the arrays is a two-digit number", function () {
    let array1 = [1, 9, 99];
    let array2 = [7, 7, 11];
    expect(function () {
      multiplyArrays(array1, array2);
    }).toThrow(new Error("Number is invalid."));
  });
});
