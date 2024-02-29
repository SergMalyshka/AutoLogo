const Shape = require("./shape.js")
class Square extends Shape {
    constructor() {
        super();
        this.shape = "";
    }

    setColor(color) {
        this.shape = `<rect x="75" y="25" width="150" height="150" fill="${color}" />`
    }
}

module.exports = Square;