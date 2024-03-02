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
            },
            {
                type: 'input',
                message: "What color would you like your text to be? Enter a color name or hexadecimal number",
                name: 'textColor',
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
            },
        ])
        .then((response) =>
            generateShape(response)
        );
}

function generateShape(data) {
    if (data.shape === "Circle") {
        const shape = new Circle();
        shape.setShapeAndColor(data.shapeColor)
        shape.setText(data.content, data.textColor)
        generateFile(shape)

    } else if (data.shape == "Square") {
        const shape = new Square();
        shape.setShapeAndColor(data.shapeColor)
        shape.setText(data.content, data.textColor)
        generateFile(shape)
    } else {
        const shape = new Triangle();
        shape.setShapeAndColor(data.shapeColor)
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