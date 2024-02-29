const fs = require('fs')
class Shape {
    constructor() {
        this.header = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`
        this.shape = ""
        this.text = ""
        this.footer = `</svg>`
    }

    setText(content, color) {
        this.text = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${content}</text>`
        return this.text
    }

    render() {
        return this.shape;
    }
}

module.exports = Shape;