// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type:'input',
        message:'What is the title of your application?',
        choices:'none',
        name:'title'
    },
    {
        type:'input',
        message:'Write a brief description of your application.',
        choices:'none',
        name:'description'
    },
    {
        type:'input',
        message:'Write a brief summary of how to instal your application.',
        choices:'none',
        name:'installation'
    },
    {
        type:'input',
        message:'Write a brief summary of how to use your application.',
        choices:'none',
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
        choices:'none',
        name:'contributing'
    },
    {
        type:'input',
        message:'Write a how others can test your application.',
        choices:'none',
        name:'tests'
    },
    {
        type:'input',
        message:'Add your github username.',
        choices:'none',
        name:'github'
    },
    {
        type:'input',
        message:'Add your email.',
        choices:'none',
        name:'email'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your user name?',
            name: 'name',
        },
        {
            type: 'checkbox',
            message: 'What languages do you know?',
            choices: ['English', 'French', 'Japanese', 'Italian', 'Spanish'],
            name: 'languages',
        },
        {
            type: 'list',
            message: 'What is your preferred method of communication?',
            choices: ['Email', 'Phone', 'Fax'],
            name: 'communication',
        }
    ]).then((response) =>
        // adds data as text
        // fs.appendFile('answers.txt', `Name: ${response.name}\nLanguages: ${response.languages}\nCommunication: ${response.communication}\n`, (err) =>
        //     err ? console.error(err) : console.log('Success!')
        // )

        // or this creates the info as a json style item
        fs.appendFile('answers.txt', JSON.stringify(response, null, '\t'), (err) =>
        err ? console.error(err) : console.log('Success!'))
    );
}

// Function call to initialize app
init();
