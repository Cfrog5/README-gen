// Importing needed modules and documents
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
function init() {
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your projects title?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'What is your projects description?',
            name: 'description',
        },
        {
            type: 'input',
            message: 'What are the steps to install your applications?',
            name: 'install',
        },
        {
            type: 'input',
            message: 'What are the instructions and examples for use of your application?',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'Who or what are the credits for your application?',
            name: 'credits',
        },
        {
            type: 'input',
            message: 'What are your contribution guidelines?',
            name: 'contribute',
        },
        {
           type: 'input',
           message: 'What are your test instructions?',
           name: 'tests', 
        },
        {
            type: 'checkbox',
            message: 'whatr is the license for this project?',
            name: 'license',
            choices: ["Apache", "Boost", "MIT"]
        },
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'git',
        },
        {
            type: 'input',
            message: 'What is your E-mail address?',
            name: 'mail',
        },
    ])
    .then((response) => {
        fs.writeFileSync("README.md", markdown(response))
            console.log(response)
    }).catch(error => {
        console.log("Error:", error)
    })

    }

    // calling function
    init();
    