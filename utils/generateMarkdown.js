// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'Boost Software License') {
    return '![Static Badge](https://img.shields.io/badge/License-Boost_Software_License-green)'
  }
  if (license === 'CC-BY-4.0') {
    return '![Static Badge](https://img.shields.io/badge/License-CC--BY--4.0-green)'
  }
  if (license === 'CC-BY-SA-4.0') {
    return '![Static Badge](https://img.shields.io/badge/License-CC--BY--SA--4.0-green)'
  }
  if (license === 'CCO-1.0') {
    return '![Static Badge](https://img.shields.io/badge/License-CCO--1.0-green)'
  }
  if (license === 'GNU GPLv2') {
    return '![Static Badge](https://img.shields.io/badge/License-GNU_GPLv2-green)'
  }
  if (license === 'GNU GPLv3') {
    return '![Static Badge](https://img.shields.io/badge/License-GNU_GPLv3-green)'
  }
  if (license === 'ISC') {
    return '![Static Badge](https://img.shields.io/badge/License-ISC-green)'
  }
  if (license === 'MIT') {
    return '![Static Badge](https://img.shields.io/badge/License-MIT-green)'
  }
  if (license === 'Mozilla Public License 2.0') {
    return '![Static Badge](https://img.shields.io/badge/License-Mozilla_Public_License_2.0-green)'
  }
  if (license === 'SIL Open Font License 1.1') {
    return '![Static Badge](https://img.shields.io/badge/License-SIL_Open_Font_License_1.1-green)'
  }
  if (license === 'The Unlicense') {
    return ''
  }
  if (license === 'Apache License 2.0') {
    return '![Static Badge](https://img.shields.io/badge/License-Apache_License_2.0-green)'
  }
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  console.log(license);
  if (license === undefined || license === 'The Unlicense') {
    return ''

  } else {
    return '- [License](#license)'
  
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title} ${renderLicenseBadge(data.license)} 

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  ${renderLicenseLink(data.license)}
  - [Contributing](#contributors)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Contributing
  ${data.contributors}

  ## Tests
  ${data.tests}

  ## Questions
  For any questions, feel free to reach me via:
  - GitHub: ${data.username}
  - Email: ${data.emailAddress}
`;
}

export default generateMarkdown;