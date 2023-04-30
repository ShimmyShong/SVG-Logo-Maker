const { Circle, Triangle, Square } = require("./shapes");

class SVG {
    render(answer) {
        if (answer.questionCharacters.length > 3) {
            console.log('Please use 3 characters or less!');
        }
        let chosenShape;
        if (answer.questionShape === 'Circle') {
            chosenShape = new Circle(answer.questionCharacters, answer.questionShapeColor, answer.questionTextColor)
        }
        else if (answer.questionShape === 'Square') {
            chosenShape = new Square(answer.questionCharacters, answer.questionShapeColor, answer.questionTextColor)
        }
        else if (answer.questionShape === 'Triangle') {
            chosenShape = new Triangle(answer.questionCharacters, answer.questionShapeColor, answer.questionTextColor)
        }
        else {
            throw new Error('Something went wrong!!')
        }
        let renderString = `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${chosenShape.template}
        <text x="150" y="${chosenShape.textY}" font-size="60" text-anchor="middle" fill="${chosenShape.textFillColor}">${chosenShape.text}</text>
        </svg>
        `
        return renderString;
    }
}

module.exports = SVG;
