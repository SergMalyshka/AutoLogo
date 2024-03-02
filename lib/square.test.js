const Square = require("./square")

describe('Square', () => {
    describe('setShapeAndColor', () => {
      it('should take a color, and return a proper svg formatted text with that color', () => {
        const color = "black"
        const expected = `<rect x="75" y="25" width="150" height="150" fill="${color}" />`
        const square = new Square();
        square.setShapeAndColor(color)
        expect(square.render()).toEqual(expected);
      });
      it("should throw an error when an improper hexadecimal value is passed in", () => {
        const color = "#ABCXYZ"
        const square = new Square();
        const cb = () => square.setShapeAndColor("#ABCXYZ")
        const err = new Error("Invalid hexadecimal value passed into the shape color input")
        expect(cb).toThrow(err);
      });
      it("should throw an error when an empty color is passed in", () => {
        const color = ""
        const square = new Square();
        const cb = () => square.setShapeAndColor(color)
        const err = new Error("Invalid hexadecimal value passed into the shape color input")
        expect(cb).toThrow(err);
      });
    });
  });