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
    message: 'Please input the color you would like to use to fill your shape.',
    name: 'shapeColor'
},
{
    type: 'input',
    message: 'Insert the text you would like to put in the shape',
    name: 'shapeText'
},
{
    type: 'input',
    message: 'Please input the text color you would like to use for your fonts',
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
    if (answer.initialChoice === 'Add Shape') {

        addShape();

    } else { return }
})
