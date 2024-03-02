const Triangle = require("./triangle")

describe('Triangle', () => {
    describe('setShapeAndColor', () => {
      it('should take a color, and return a proper svg formatted text with that color', () => {
        const color = "black"
        const expected = `<polygon points="150, 18 244, 182 56, 182" fill="${color}" />`
        const triangle = new Triangle();
        triangle.setShapeAndColor(color)
        expect(triangle.render()).toEqual(expected);
      });
      it("should throw an error when an improper hexadecimal value is passed in", () => {
        const color = "#ABCXYZ"
        const triangle = new Triangle();
        const cb = () => triangle.setShapeAndColor("#ABCXYZ")
        const err = new Error("Invalid hexadecimal value passed into the shape color input")
        expect(cb).toThrow(err);
      });
      it("should throw an error when an empty color is passed in", () => {
        const color = ""
        const triangle = new Triangle();
        const cb = () => triangle.setShapeAndColor(color)
        const err = new Error("Invalid hexadecimal value passed into the shape color input")
        expect(cb).toThrow(err);
      });
    });
  });