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
// function writeToFile(fileName, data) {

// }

function init() {
    // Ask user questions in terminal
    inquirer
    .prompt([
        {
            type: questions[0].type,
            message: questions[0].message,
            choices: questions[0].choices,
            name: questions[0].name
        },
        {
            type: questions[1].type,
            message: questions[1].message,
            choices: questions[1].choices,
            name: questions[1].name
        },
        {
            type: questions[2].type,
            message: questions[2].message,
            choices: questions[2].choices,
            name: questions[2].name
        },
        {
            type: questions[3].type,
            message: questions[3].message,
            choices: questions[3].choices,
            name: questions[3].name
        },
        {
            type: questions[4].type,
            message: questions[4].message,
            choices: questions[4].choices,
            name: questions[4].name
        },
        {
            type: questions[5].type,
            message: questions[5].message,
            choices: questions[5].choices,
            name: questions[5].name
        },
        {
            type: questions[6].type,
            message: questions[6].message,
            choices: questions[6].choices,
            name: questions[6].name
        },
        {
            type: questions[7].type,
            message: questions[7].message,
            choices: questions[7].choices,
            name: questions[7].name
        },
        {
            type: questions[8].type,
            message: questions[8].message,
            choices: questions[8].choices,
            name: questions[8].name
        }
    ])
    .then((response) => {
        console.log("test");
    });
    }

    
    // ]).then((response) =>
    //     // adds data as text
    //     // fs.appendFile('answers.txt', `Name: ${response.name}\nLanguages: ${response.languages}\nCommunication: ${response.communication}\n`, (err) =>
    //     //     err ? console.error(err) : console.log('Success!')
    //     // )

    //     // or this creates the info as a json style item
    //     fs.appendFile('answers.txt', JSON.stringify(response, null, '\t'), (err) =>
    //     err ? console.error(err) : console.log('Success!'))
    // );
// }

// Function call to initialize app
init();
