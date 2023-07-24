// Includes packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const genMarkdwn = require('./utils/generateMarkdown');

// Variable to hold responses
let content = '';

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
        message:'Enter a description of your application.',
        choices:null,
        name:'description'
    },
    {
        type:'input',
        message:'Please provide usage intructions.',
        choices:null,
        name:'installation'
    },
    {
        type:'input',
        message:'Please provide usage information.',
        choices:null,
        name:'usage'
    },
    {
        type:'list',
        message:'Select the license used for your application.',
        choices:['none','MIT','Academic Free License v3.0','Apache license 2.0','Artistic license 2.0','Boost Software License 1.0','BSD 2-clause "Simplified" license','BSD 3-clause "New" or "Revised" license','BSD 3-clause Clear license','BSD 4-clause "Original" or "Old" license','BSD Zero-Clause license','Creative Commons license family','Creative Commons Zero v1.0 Universal','Creative Commons Attribution 4.0','Creative Commons Attribution Share Alike 4.0','Do What The F*ck You Want To Public License','Educational Community License v2.0','Eclipse Public License 1.0','Eclipse Public License 2.0','European Union Public License','GNU Affero General Public License v3.0','GNU General Public License family','GNU General Public License v2.0','GNU General Public License v3.0','GNU Lesser General Public License family','GNU Lesser General Public License v2.1','GNU Lesser General Public License v3.0','ISC','LaTeX Project Public License v1.3c','Microsoft Public License','Mozilla Public License 2.0','Open Software License 3.0','PostgreSQL License','SIL Open Font License 1.1','University of Illinois/NCSA Open Source License','The Unlicense','zLib License'],
        name:'license'
    },
    {
        type:'input',
        message:'Please provide contributing guidelines.',
        choices:null,
        name:'contributing'
    },
    {
        type:'input',
        message:'Please enter testing instructions.',
        choices:null,
        name:'tests'
    },
    {
        type:'input',
        message:'Enter your github username.',
        choices:null,
        name:'github'
    },
    {
        type:'input',
        message:'Enter your email.',
        choices:null,
        name:'email'
    }
];

// function to write README file
function writeToFile(fileName, data) {
    // Create folder for result so README.md for this application is not overridden
    if(!(fs.existsSync('./result'))){
        fs.mkdir('./result', (err) =>
        err ? console.error(err) : console.log('Created result folder'));
    }

    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Your README has been created! Please check the result folder!'));
}

function init() {
    // Ask user questions in terminal
    inquirer
    .prompt([
        {
            type: questions[0].type,
            message: questions[0].message,
            choices: questions[0].choices,
            default: 'N/A',
            name: questions[0].name
        },
        {
            type: questions[1].type,
            message: questions[1].message,
            choices: questions[1].choices,
            default: 'N/A',
            name: questions[1].name
        },
        {
            type: questions[2].type,
            message: questions[2].message,
            choices: questions[2].choices,
            default: 'N/A',
            name: questions[2].name
        },
        {
            type: questions[3].type,
            message: questions[3].message,
            choices: questions[3].choices,
            default: 'N/A',
            name: questions[3].name
        },
        {
            type: questions[4].type,
            message: questions[4].message,
            choices: questions[4].choices,
            default: 'MIT',
            name: questions[4].name
        },
        {
            type: questions[5].type,
            message: questions[5].message,
            choices: questions[5].choices,
            default: 'N/A',
            name: questions[5].name
        },
        {
            type: questions[6].type,
            message: questions[6].message,
            choices: questions[6].choices,
            default: 'N/A',
            name: questions[6].name
        },
        {
            type: questions[7].type,
            message: questions[7].message,
            choices: questions[7].choices,
            default: 'N/A',
            name: questions[7].name
        },
        {
            type: questions[8].type,
            message: questions[8].message,
            choices: questions[8].choices,
            default: 'N/A',
            name: questions[8].name
        }
    ])
    .then((response) => {
        // Get README text content
        content = genMarkdwn.generateMarkdown(response);

        // Create the file using created content
        writeToFile('./result/README.md', content);
    });
}


// Function call to initialize app
init();



