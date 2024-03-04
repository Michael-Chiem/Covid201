const inquirer = require("inquirer");
const { Square, Circle, Triangle } = require("./lib/shapes");
const fs = require("fs");

const initialQuestion = {
    type: 'list',
    message: 'Please select an option',
    choices: ['Create Shape', 'Exit'],
    name: 'initialChoice'
}