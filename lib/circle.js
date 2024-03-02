const Shape = require("./shape.js")
class Circle extends Shape {
    constructor() {
        super();
        this.shape = "";
    }

    //Sets the shape to circle and the color to the input
    setShapeAndColor(color) {
        //use supers hexValidator to make sure color is acceptable
        const validColor = super.hexValidator(color)
        if (validColor && color.length > 0) {
            this.shape = `<circle cx="150" cy="100" r="80" fill="${color}" />`
        } else {
            if (!validColor) {
                //invalid hex returns an error
                throw new Error("Invalid hexadecimal value passed into the shape color input")
            } else {
                //empty color returns an error
                throw new Error("Color cannot be empty")
            }
        }
    }
}

module.exports = Circle;