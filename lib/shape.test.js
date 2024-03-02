const Shape = require("./shape")

describe('Shape', () => {
    describe('setText', () => {
      it('should take two strings, the text for the logo and a color', () => {
        const color = "black"
        const content = "txt"
        const expected = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${content}</text>`
        const shape = new Shape();
        expect(shape.setText(content, color)).toEqual(expected);
      });
      it('should throw an error when an ivalid hexadecimal epression is passed into the color variable', () => {
        const shape = new Shape();
        const cb = () => shape.setText("txt", "#ABCXYZ")
        const err = new Error("Invalid input for the text portion of the SVG")
        expect(cb).toThrow(err);
      });
      it("should throw an error when the text input is longer then 3 letters", () => {
        const shape = new Shape();
        const cb = () => shape.setText("text", "#ABC123")
        const err = new Error("Invalid input for the text portion of the SVG")
        expect(cb).toThrow(err);
      });
      it("should throw an error if the user enters an empty string", () => {
        const shape = new Shape();
        const cb = () => shape.setText("", "#ABC123")
        const err = new Error("Invalid input for the text portion of the SVG")
        expect(cb).toThrow(err);
      })
    });
  });