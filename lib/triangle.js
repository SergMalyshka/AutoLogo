const Shape = require("./shape.js")
class Triangle extends Shape {
    constructor() {
        super();
        this.shape = "";
    }

    setShapeAndColor(color) {
        if (super.hexValidator(color) && color.length > 0) {
            this.shape = `<polygon points="150, 18 244, 182 56, 182" fill="${color}" />`
        } else {
            throw new Error("Invalid hexadecimal value passed into the shape color input")
        }
    }
}

module.exports = Triangle;