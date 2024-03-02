const fs = require('fs')
class Shape {
    constructor() {
        this.header = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`
        this.shape = ""
        this.text = ""
        this.footer = `</svg>`
    }

    setText(content, color) {
        if(this.hexValidator(color) && this.contentValidator(content) && color.length > 0) {
            this.text = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${content}</text>`
            return this.text
        } else {
            throw new Error("Invalid input for the text portion of the SVG")
        }
    }

    render() {
        return this.shape;
    }

    contentValidator(input) {
        if (input.length > 0 && input.length < 4) {
            return true;
        } else {
            return false;
        }
    }

    hexValidator(input) {
        if (input.charAt(0) === "#") {
            let regex = new RegExp(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/);
            if (regex.test(input) == true && input.length == 7) {
                return true;
            } else {
                return false;
            }
        } else {
            return true
        }
    }
}

module.exports = Shape;