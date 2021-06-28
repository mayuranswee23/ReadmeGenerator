// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
// const utils = require('utils');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input

const questions = () => {
    return inquirer.prompt([
        {
    type: 'input',
    message: 'What is the title of the project?',
    name: 'Title'
},
{
    type: 'input',
    message: 'Please provide a description of your project',
    name: 'Description'
},
// {
//     type: 'input',
//     message: 'Table of Contents',
//     name: 'Table of Contents'
// },
{
    type: 'input',
    message: 'Please provide details on the steps to install your project',
    name: 'Installation'
},
{
    type: 'input',
    message: 'Please provide instructions on how this app will be used',
    name: 'Usage'
},
{
    type: 'list',
    message: 'What liscence is used?',
    name: 'License', 
    choices: ['MIT', 'GPL', 'CC-0']
},
{
    type: 'input',
    message: "Indicate who has contributed to this project",
    name: 'Contributing'
},
{
    type: 'input',
    message: 'Provide information on the tests needed to run the application',
    name: 'Tests'
},
{
    type: 'input',
    message: 'Please provide contact information for questions',
    name: 'Questions'
},
{
    type: 'input',
    message: 'Please provide your GitHub username',
    name: 'Username'
},
{
    type: 'input',
    message: 'Please provide your email address',
    name: 'Email'
}
])
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err){
        // console.log(fileName)
        // console.log(data)
        if (err) throw new Error(err);
       
        console.log ("Creation of the README is a success!")
        
    })
}

// TODO: Create a function to initialize app
function init() {
    // inquirer.prompt(questions)
    questions()
    .then(function(data){
        writeToFile ("README.md", generateMarkdown(data));
    })
}

// Function call to initialize app
init();

