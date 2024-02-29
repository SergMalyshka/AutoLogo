const inquirer = require('inquirer');
const Circle = require("./lib/circle.js")
const Square = require("./lib/square.js")
const Triangle = require("./lib/triangle.js")
const fs = require('fs')

function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: "What is your desired text",
                name: 'content',
                validate: function (input) {
                    if (input.length > 0 && input.length < 4) {
                        return true;
                    } else {
                        console.log(".   Please enter a valid input")
                        return false;
                    }
                }
            },
            {
                type: 'input',
                message: "What color would you like your text to be? Enter a color name or hexadecimal number",
                name: 'textColor',
                validate: function (input) {
                    if (input.charAt(0) === "#") {
                        let regex = new RegExp(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/);
                        if (regex.test(input) == true && input.length == 7) {
                            return true;
                        } else {
                            console.log(".   Please enter a valid hexadecimal value")
                            return false
                        }
                    } else {
                        return true;
                    }
                }
            },
            {
                type: 'list',
                name: 'shape',
                message: 'What shape would you like your logo to be?',
                choices: ['Circle', 'Triangle', 'Square'],
            },
            {
                type: 'input',
                message: "What color would you like your shape to be? Enter a color name or hexadecimal number",
                name: 'shapeColor',
                validate: function (input) {
                    if (input.charAt(0) === "#") {
                        let regex = new RegExp(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/);
                        if (regex.test(input) == true && input.length == 7) {
                            return true;
                        } else {
                            console.log(".   Please enter a valid hexadecimal value")
                            return false
                        }
                    } else {
                        return true
                    }
                }
            },
        ])
        .then((response) =>
            generateShape(response)
        );
}


function generateShape(data) {
    if (data.shape === "Circle") {
        const shape = new Circle();
        shape.setColor(data.shapeColor)
        shape.setText(data.content, data.textColor)
        generateFile(shape)

    } else if (data.shape == "Square") {
        const shape = new Square();
        shape.setColor(data.shapeColor)
        shape.setText(data.content, data.textColor)
        generateFile(shape)
    } else {
        const shape = new Triangle();
        shape.setColor(data.shapeColor)
        shape.setText(data.content, data.textColor)
        generateFile(shape)
    }
}

function generateFile(shape) {
    const fileData =
        `${shape.header} \n
    ${shape.shape} \n
    ${shape.text} \n
    ${shape.footer}`

    fs.writeFile("logo.svg", fileData, (err) =>
        err ? console.error(err) : console.log('Generated logo.svg'))
}

init();