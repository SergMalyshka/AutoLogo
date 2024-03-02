const Shape = require("./shape.js")

class Square extends Shape {
    constructor() {
        super();
        this.shape = "";
    }

    setShapeAndColor(color) {
        if(super.hexValidator(color) && color.length > 0) {
            this.shape = `<rect x="75" y="25" width="150" height="150" fill="${color}" />`
        } else {
            throw new Error("Invalid hexadecimal value passed into the shape color input")
        }
    }
}

module.exports = Square;