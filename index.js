// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    {
        name: "title",
        type: "input",
        message: "What is the title of your application?"
    },
    {
        name: "description",
        type: "input",
        message: "Provide a description the application"
    },
    {
        name: "installation",
        type: "input",
        message: "What are the instructions for installing your application?"
    },
    {
        name: "usage",
        type: "input",
        message: "What are the instructions for using your application?"
    },
    {
        name: "contributing",
        type: "input",
        message: "How can other developers contribute?"
    },
    {
        name: "tests",
        type: "input",
        message: "How can the application be tested?"
    },
    {
        name: "licenses",
        list: "list",
        message: "Which license is the application using?",
        choices: ["A", "B", "C", "D"]
    },
    {
        name: "github",
        type: "input",
        message: "What is your GitHub username?"
    },
    {
        name: "email",
        type: "input",
        message: "What is your email address?"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, error => (error? console.error(error) : console.log("README file written")));
}

// TODO: Create a function to initialize app
async function init() {
    inquirer.prompt(questions)
    .then(responses => {
        console.log(responses);
        writeToFile("./README.md", generateMarkdown(responses));
    });
}

// Function call to initialize app
init();
