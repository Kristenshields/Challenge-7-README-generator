// TODO: Include packages needed for this application

import fs from "fs";
import inquirer from "inquirer";
import generateMarkdown from "./utils/generateMarkdown.js";

// TODO: Create an array of questions for user input
const questions = [
    //Enter title of project:
    {
        type: "input",
        name: "title",
        message: "Enter title of project:",
        validate: projectTitle => {
            if (projectTitle) {
                return true;
            } else {
                console.log("Please enter title!");
                return false;
            }
        }
    },
    //Description of project:
    {
        type: "input",
        name: "description",
        message: "Enter description of project:",
        validate: projectDescription => {
            if (projectDescription) {
                return true;
            } else {
                console.log("Please enter description!");
                return false;
            }
        }

    },
    //Steps to install:
    {
        type: "input",
        name: "installation",
        message: "Steps to install:",
        validate: installation => {
            if (installation) {
                return true;
            } else {
                console.log("Please enter steps to install!");
                return false;
            }
        }
    },
    //usage information
    {
        type: "input",
        name: "usage",
        message: "Enter usage information:",
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log("Please enter usage information!");
                return false;
            }
        }
    },
    //Any Contributors:
    {
        type: "confirm",
        name: "confirmContributors",
        message: "Was there any contributors?",
        default: false
    },
    {
        type: "input",
        name: "contributors",
        message: "Name of contributors:",
        validate: contributors => {
            if (contributors) {
                return true;
            } else {
                console.log("this field can't be empty!")
                return false;
            }
        },
        when: ({ confirmContributors }) => {
            if (confirmContributors) {
                return true;
            } else {
                return false;
            }
        }

    },
    //test instructions:
    {
        type: "input",
        name: "tests",
        message: "Enter test instructions:",
        validate: testInstructions => {
            if (testInstructions) {
                return true;
            } else {
                console.log("Please enter test instructions!")
                return false;
            }
        }
    },
    //What license will you use:
    {
        type: "confirm",
        name: "confirmLicense",
        message: "Do you have a license?",
        default: false
    },
    {
        type: "list",
        name: "license",
        message: "What license will you use:",
        choices: ['Apache License 2.0',
            'Boost Software License',
            'CC-BY-4.0',
            'CC-BY-SA-4.0',
            'CCO-1.0',
            'GNU GPLv2',
            'GNU GPLv3',
            'ISC',
            'MIT',
            'Mozilla Public License 2.0',
            'SIL Open Font License 1.1',
            'The Unlicense'],
        when: ({ confirmLicense }) => {
            if (confirmLicense) {
                return true;
            } else {
                return false;
            }
        }
    },
    //Enter your gitHub Username:
    {
        type: "input",
        name: "username",
        message: "Enter your gitHub Username:",
        validate: userNameInput => {
            if (userNameInput) {
                return true;
            } else {
                console.log("Please enter Username!");
                return false;
            }
        }
    },
    //Enter your Email Address:
    {
        type: "input",
        name: "emailAddress",
        message: "Enter your Email Address:",
        validate: userEmailInput => {
            if (userEmailInput) {
                return true;
            } else {
                console.log("Please enter your email address!");
                return false;
            }
        }
    },
//questions
];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile("./dist/README.md", data, error => {
        if (error) {
            console.log(error);
        } else {
            console.log("README generated!");
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
    .then(readmeData => generateMarkdown(readmeData))
    .then(markedDowncontent => writeToFile(markedDowncontent));
}

// Function call to initialize app
init();
