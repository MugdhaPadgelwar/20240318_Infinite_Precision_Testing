describe("addition function", function () {
  it("should add two arrays of equal length correctly", function () {
    let array1 = [1, 9, 9];
    let array2 = [7, 7, 0];
    expect(addition(array1, array2)).toEqual("969");
  });

  it("should add two arrays of different length correctly", function () {
    let array1 = [2, 5, 9, 8];
    let array2 = [3, 6, 1];
    expect(addition(array1, array2)).toEqual("2959");
  });

  it("should handle carrying over correctly", function () {
    let array1 = [9, 9, 9];
    let array2 = [9, 9, 9];
    expect(addition(array1, array2)).toEqual("1998");
  });

  it("should throw an error if any element in the arrays is negative", function () {
    let array1 = [1, 2, -3];
    let array2 = [-4, 5, 6];
    expect(function () {
      addition(array1, array2);
    }).toThrow(new Error("Please enter positive numbers only."));
  });

  it("should throw an error if any element in the arrays is a two-digit number", function () {
    let array1 = [1, 9, 99];
    let array2 = [7, 7, 11];
    expect(function () {
      addition(array1, array2);
    }).toThrow(new Error("Number is invalid."));
  });

  it("should throw an error for empty arrays", function () {
    expect(function () {
      addition([], []);
    }).toThrowError("Both input arrays contain all zeros.");
  });

  it("should throw an error if both input arrays contain all zeros", function () {
    expect(function () {
      addition([0, 0, 0], [0, 0, 0]);
    }).toThrowError("Both input arrays contain all zeros.");
  });
});
