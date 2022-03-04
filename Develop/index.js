// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const { writeFile, copyFile } = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const userQuestions = [
      {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
        validate: titleInput => {
          if (titleInput) {
            return true;
          } else {
            console.log('Please enter your project title!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a short description explaining the what, why, and how of your project. &#013; Use the following questions as a guide: &#013; -What was your motivation? &#013; -Why did you build this project? &#013; -What problem does it solve? &#013; - What did you learn?',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Provide examples for use.',
      },
      {
        type: 'checkbox',
        name: 'license',
        message: 'Which license would you like to include for this project?',
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense']
      },
      {
        type: 'input',
        name: 'contributors',
        message: 'List your contributors, if any.',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Go the extra mile and write tests for your applications.',
      },
      {
        type: 'input',
        name: 'username',
        message: 'Please provide your github username.',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Please provide your e-mail address.',
      },
    ];
  

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    readMe = generateMarkdown(data);

    fs.writeFile('README.md', generatePage(), err => {
        if (err) throw err;
  
        console.log('README.md creation complete!');
    });
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(userQuestions)
        .then(userAnswersData => {
            writeToFile('./dist/README.md', userAnswersData);
        }).catch(err => {
            console.log(err);
        });
}
// Function call to initialize app
init();
