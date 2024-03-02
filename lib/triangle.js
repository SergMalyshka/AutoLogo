const Shape = require("./shape.js")
class Triangle extends Shape {
    constructor() {
        super();
        this.shape = "";
    }

    //Sets the shape to triangle and the color to the input
    setShapeAndColor(color) {
        //use supers hexValidator to make sure color is acceptable
        const validColor = super.hexValidator(color)
        if (validColor && color.length > 0) {
            this.shape = `<polygon points="150, 18 244, 182 56, 182" fill="${color}" />`
        } else {
            //throw appropriate errors
            if (!validColor) {
                throw new Error("Invalid hexadecimal value passed into the shape color input")
            } else {
                throw new Error("Color cannot be empty")
            }
        }
    }
}

module.exports = Triangle;