const Shape = require("./shape.js")
class Triangle extends Shape {
    constructor() {
        super();
        this.shape = "";
    }

    setColor(color) {
        this.shape = `'<polygon points="150, 18 244, 182 56, 182" fill="${color}" />'`
    }
}

module.exports = Triangle;