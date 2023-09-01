// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")
const generateMarkdown = require('./utils/generateMarkdown');



const readmeStrTemplate = (data) => {
    return `# Project title
${data.title}

## Table of Contents
- [Description](#project-description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Testing](#testing)
- [Questions](#questions)

## Description
${data.Description}

## Installation
${data.Installation}

## Usage
${data.Usage}

## Contributing
${data.Contributing}

## Tests
${data.Tests}

## Questions
  Reach out to the owner of the repo, [${data.github}](https://github.com/${data.github}) at ${data.Email}.
  `;

}

const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, function(err) {
        console.log(err)
    })
}

const askQuestions = () => {
    inquirer.prompt(
        [
            {
                type: "input",
                name: "github",
                message: "Please enter your GitHub username"
            },
            {
                type: "input",
                name: "Email",
                message: "Please enter your email"
            },
            {
                type: "input",
                name: "title",
                message: "What is your project title?"
            },
            {
                type: "input",
                name: "Description",
                message: "What is the description of your project?"
            },
            {
                type: "input",
                name: "Installation",
                message: "Are there installation instrutions?"
            },
            {
                type: "input",
                name: "Usage",
                message: "Are there usage information instructions?"
            },
            {
                type: "input",
                name: "Contribution",
                message: "Are there contributions guidelines?"
            },
            {
                type: "input",
                name: "testInstructions",
                message: "Are there tests instructions?"
            },
            {
                type: "input",
                name: "Tests",
                message: "Tests of the application"
            },
        
        ]

    ).then(function(data) {
        console.log("data: ", data);  // --> Ex: { name: "Bill", languages: "Spanish", communication: "email"}
        writeToFile("README.md", readmeStrTemplate(data))
    })
}

askQuestions()


