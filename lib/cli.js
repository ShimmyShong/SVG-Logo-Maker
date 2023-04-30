const inquirer = require("inquirer");
const SVG = require("./svg");
const { writeFile } = require("fs/promises");
const { default: Choice } = require("inquirer/lib/objects/choice");

const questions = [ // array of questions asked to the user via inquirer
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
      .then((answer) => {
        if (answer.questionCharacters.length > 3) { // checks to make sure there were 3 or less characters inputted for the logo
          console.log('Please use 3 characters or less!')
        }
        else {
          const newSVG = new SVG();
          const results = newSVG.render(answer);
          console.log(results);
          writeFile('./examples/logo.svg', results, (err) => { // creates a new svg file in the examples folder
            err ? console.error(err) : console.log('SVG file created');
          })
        }
      })
  }
}

module.exports = CLI;
