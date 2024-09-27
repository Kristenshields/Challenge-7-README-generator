// TODO: Include packages needed for this application

import fs from "fs";
import inquirer from "inquirer";
import generateMarkdown from "./utils/generateMarkdown.js";

// TODO: Create an array of questions for user input
const questions = [
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
                return true
            } else {
                console.log("this field can't be empty!")
                return false
            }
        },
        when: ({confirmContributors}) => {
            if (confirmContributors) {
                return true;
            } else {
                return false;
            }
        }

    }
    //Questions:
    //testing
    //Test instructions:

    //badges: 
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions);
}

// Function call to initialize app
init();
