const fs = require("fs");
const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown.js");

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
        name: "license",
        type: "list",
        message: "Which license is the application using?",
        choices: ["Apache", "GNU", "MIT",]
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

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, error => (error? console.error(error) : console.log("README file written")));
}

async function init() {
    inquirer.prompt(questions)
    .then(responses => {
        console.log(responses);
        writeToFile("./README.md", generateMarkdown(responses));
    });
}

init();
