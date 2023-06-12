const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes.js');

inquirer.prompt([
  {
    type: 'list',
    name: 'shape',
    message: 'What shape would you like to use?',
    choices: ['circle', 'triangle', 'square']
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'What color would you like the shape to be?',
  },
  {
    type: 'input',
    name: 'text',
    message: 'What text would you like in the logo?',
    validate: function (value) {
      if (value.length <= 3) {
        return true;
      }
      return 'Please enter up to three characters only';
    },
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'What color would you like the text to be?',
  },
]).then(answers => {
  let shape;
  if (answers.shape === 'circle') {
    shape = new Circle(answers.shapeColor);
  } else if (answers.shape === 'triangle') {
    shape = new Triangle(answers.shapeColor);
  } else {
    shape = new Square(answers.shapeColor);
  }
  
  const svgContent = `
  <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shape.render()}
    <text x="50%" y="50%" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
  </svg>
  `;

  fs.writeFileSync('logo.svg', svgContent);
  console.log("Generated logo.svg successfully!");
});
