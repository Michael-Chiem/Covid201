const inquirer = require("inquirer");
const { Square, Circle, Triangle } = require("./lib/shapes");
const fs = require("fs");

const initialQuestion = {
    type: 'list',
    message: 'Please select an option',
    choices: ['Create Shape', 'Exit'],
    name: 'initialChoice'
}

const shapeQuestion = [{
    type: 'list',
    message: 'Select a shape type',
    choices: ['Circle', 'Square', 'Triangle'],
    name: 'shapeChoice'
},
{
    type: 'input',
    message: 'Please input the color you would like to use to fill your shape:',
    name: 'shapeColor'
},
{
    type: 'input',
    message: 'Insert the text you would like to put in the shape:',
    name: 'shapeText'
},
{
    type: 'input',
    message: 'Please input the text color you would like to use for your fonts:',
    name: 'shapeTextColor'
},
{
    type: 'input',
    message: 'What font size would you like the text to be?',
    name: 'fontSize',
    default: '40'
}];


inquirer.prompt(initialQuestion).then((answer) => {
    //console.log(answer);
    if (answer.initialChoice === 'Create Shape') {

        addShape();

    } else { return }
})

function addShape() {
    inquirer.prompt(shapeQuestion).then((answer) => {

        //console.log(answer);
        let newShape;

        if (answer.shapeChoice === 'Circle') {
             newShape = new Circle(answer.shapeColor);
        } else if (answer.shapeChoice === 'Square') {
             newShape = new Square(answer.shapeColor);
        } else {
             newShape = new Triangle(answer.shapeColor);
        }

        newShape.setColor(answer.shapeColor);
        const shapeElement = newShape.render();

        const svgData =
    `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

${shapeElement}

<text x="150" y="150" font-size="${answer.fontSize}" text-anchor="middle" fill="${answer.shapeTextColor}">${answer.shapeText}</text>

</svg>`;


        fs.writeFileSync('logo.svg', svgData);

    })



}