const inquirer = require("inquirer");
const SVG = require("./svg");
const { Circle, Triangle, Square } = require("./shapes");
const { writeFile } = require("fs/promises");
const { default: Choice } = require("inquirer/lib/objects/choice");

const questions = [
  {
    name: 'questionCharacters',
    message: 'Type up to 3 characters you would like to enter.',
    type: 'input'
  },
  {
    name: 'questionTextColor',
    message: 'What color would you like the text to be? (You may enter a hexadecimal number.)',
    type: 'input'
  },
  {
    name: 'questionShape',
    message: 'What shape would you like?',
    type: 'list',
    choices: ['Circle', 'Triangle', 'Square']
  },
  {
    name: 'questionShapeColor',
    message: 'What color would you like the shape to be? (You may enter a hexadecimal number.)',
    type: 'input'
  }
]

class CLI {
  run() {
    inquirer
      .prompt(questions)
      .then(answer)

  }
}

module.exports = CLI;
