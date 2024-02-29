const Shape = require("./shape.js")
class Circle extends Shape {
    constructor() {
        super();
        this.shape = "";
    }

    setColor(color) {
        this.shape = `<circle cx="150" cy="100" r="80" fill="${color}" />`
    }
}

module.exports = Circle;