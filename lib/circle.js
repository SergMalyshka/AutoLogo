const Shape = require("./shape.js")
class Circle extends Shape {
    constructor() {
        super();
        this.shape = "";
    }

    setShapeAndColor(color) {
        if(super.hexValidator(color) && color.length > 0) {
            this.shape = `<circle cx="150" cy="100" r="80" fill="${color}" />`
        } else {
            throw new Error("Invalid hexadecimal value passed into the shape color input")
        }
    }
}

module.exports = Circle;