// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const genMarkdwn = require('./utils/generateMarkdown.js');

// Array of questions for user input
const questions = [
    {
        type:'input',
        message:'What is the title of your application?',
        choices:null,
        name:'title'
    },
    {
        type:'input',
        message:'Write a brief description of your application.',
        choices:null,
        name:'description'
    },
    {
        type:'input',
        message:'Write a brief summary of how to instal your application.',
        choices:null,
        name:'installation'
    },
    {
        type:'input',
        message:'Write a brief summary of how to use your application.',
        choices:null,
        name:'usage'
    },
    {
        type:'list',
        message:'Select the license used for your application.',
        choices:['MIT',],
        name:'lisence'
    },
    {
        type:'input',
        message:'Write a brief summary of how others can contrubute to your application.',
        choices:null,
        name:'contributing'
    },
    {
        type:'input',
        message:'Write a how others can test your application.',
        choices:null,
        name:'tests'
    },
    {
        type:'input',
        message:'Add your github username.',
        choices:null,
        name:'github'
    },
    {
        type:'input',
        message:'Add your email.',
        choices:null,
        name:'email'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

function init() {
    // Ask user questions in terminal
    questions.forEach(question => {
        if(question.choices) {
            inquirer
            .prompt(
                {
                    type: question.type,
                    message: question.message,
                    choices: question.choices,
                    name: question.name
                }
            )
            .then()
        }
        else {
            inquirer
            .prompt(
                {
                    type: question.type,
                    message: question.message,
                    name: question.name
                }
            )
            .then()
        }
        
    });

    
    // ]).then((response) =>
    //     // adds data as text
    //     // fs.appendFile('answers.txt', `Name: ${response.name}\nLanguages: ${response.languages}\nCommunication: ${response.communication}\n`, (err) =>
    //     //     err ? console.error(err) : console.log('Success!')
    //     // )

    //     // or this creates the info as a json style item
    //     fs.appendFile('answers.txt', JSON.stringify(response, null, '\t'), (err) =>
    //     err ? console.error(err) : console.log('Success!'))
    // );
}

// Function call to initialize app
init();
