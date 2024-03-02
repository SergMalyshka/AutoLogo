const fs = require('fs')
class Shape {

    //break the SVG into four parts
    constructor() {
        //header is preset and shared between all classes
        this.header = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`
        //shape will be handled by individual shape classes
        this.shape = ""
        //text is shared between all shapes and will be handled here
        this.text = ""
        //footer is preset and shared between all classes
        this.footer = `</svg>`
    }

    //function to set the text and the color of the SVG
    setText(content, color) {
        //check to make sure that HEX is correct if it is, content is of proper length and color is not empty
        if(this.hexValidator(color) && this.contentValidator(content) && color.length > 0) {
            //text SVG is the same between all shapes and can be set here as long as the checks are passed
            this.text = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${content}</text>`
            return this.text
        } else {
            //if checks fails we throw an error that something went wrong
            if (!this.hexValidator(color)) {
                //hex is invalid
                throw new Error("Hex validation failed")
            } else if (!this.contentValidator(content)) {
                //content is wrong
                throw new Error("Content needs to be greater than 0 and less than 4 characters long")
            } else {
                //empty color
                throw new Error("Color cannot be empty")
            }
        }
    }

    //method shared between all individual classes, returns the shape portion of the Shape
    render() {
        return this.shape;
    }

    //validating the Text portion of the input, if less than 1 or greater than 3 return false
    contentValidator(input) {
        if (input.length > 0 && input.length < 4) {
            return true;
        } else {
            return false;
        }
    }

    //if color starts with a # its a hexadecimal expression
    hexValidator(input) {
        if (input.charAt(0) === "#") {
            //define a regex of allowed characters
            let regex = new RegExp(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/);
            //if regex passes and the length is good return true
            if (regex.test(input) == true && input.length == 7) {
                return true;
            } else {
                return false;
            }
        } else {
            //always returns true if the first character of the string is not #
            return true
        }
    }
}

module.exports = Shape;