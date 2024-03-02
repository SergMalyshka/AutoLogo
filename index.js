//all the imports
const inquirer = require('inquirer');
const Circle = require("./lib/circle.js")
const Square = require("./lib/square.js")
const Triangle = require("./lib/triangle.js")
const fs = require('fs')

//inquirer questions required for the generation
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
            //sending code to the create the shape based on the provided info
            generateShape(response)
        );
}

function generateShape(data) {
    if (data.shape === "Circle") {
        //if the shape is a circle make a new circle and populate it with the proper data
        const shape = new Circle();
        shape.setShapeAndColor(data.shapeColor)
        shape.setText(data.content, data.textColor)
        //generate the file based on the new shape, repeated in other if else statements
        generateFile(shape)

    } else if (data.shape == "Square") {
        //if the shape is a sqaure make a new square and populate it with the proper data
        const shape = new Square();
        shape.setShapeAndColor(data.shapeColor)
        shape.setText(data.content, data.textColor)
        generateFile(shape)
    } else {
        //if its neither of the first two it has to be a triangle
        const shape = new Triangle();
        shape.setShapeAndColor(data.shapeColor)
        shape.setText(data.content, data.textColor)
        generateFile(shape)
    }
}

function generateFile(shape) {
    //dynamically create the SVG data
    const fileData =
        `${shape.header} \n
    ${shape.shape} \n
    ${shape.text} \n
    ${shape.footer}`
    //write the data into the file, throw an error if the error is caught
    fs.writeFile("logo.svg", fileData, (err) =>
        err ? console.error(err) : console.log('Generated logo.svg'))
}

init();