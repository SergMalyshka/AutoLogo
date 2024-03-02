const Circle = require("./circle")

describe('Circle', () => {
    describe('setShapeAndColor', () => {
      it('should take a color, and return a proper svg formatted text with that color', () => {
        const color = "black"
        const expected = `<circle cx="150" cy="100" r="80" fill="${color}" />`
        const circle = new Circle();
        circle.setShapeAndColor(color)
        expect(circle.render()).toEqual(expected);
      });
      it("should throw an error when an improper hexadecimal value is passed in", () => {
        const color = "#ABCXYZ"
        const circle = new Circle();
        const cb = () => circle.setShapeAndColor(color)
        const err = new Error("Invalid hexadecimal value passed into the shape color input")
        expect(cb).toThrow(err);
      });
      it("should throw an error when an empty color is passed in", () => {
        const color = ""
        const circle = new Circle();
        const cb = () => circle.setShapeAndColor(color)
        const err = new Error("Invalid hexadecimal value passed into the shape color input")
        expect(cb).toThrow(err);
      });
    });
  });