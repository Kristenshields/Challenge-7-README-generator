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
function renderLicenseSection(license) {
  if (license === undefined || license === 'The Unlicense') {
    return ''
  }
  if (license === 'Boost Software License') {
    return `## License 
    The Boost Software License (BSL) is an open-source software license created by the Boost community, designed to allow developers and companies to freely use, modify, and distribute software with minimal restrictions.`
  }
  if (license === 'CC-BY-4.0') {
    return `## License
    The Creative Commons Attribution 4.0 International License (CC BY 4.0) is a widely-used open content license that allows creators to share their work with the public, while still maintaining some level of control.`
  }
  if (license === 'CC-BY-SA-4.0') {
    return `## License
    The Creative Commons Attribution-ShareAlike 4.0 International License (CC BY-SA 4.0) is an open content license that allows users to freely use, share, and adapt a work, provided they give appropriate credit and share derivative works under the same license.`
  }
  if (license === 'CCO-1.0') {
    return `## License
    
The Creative Commons Zero 1.0 Universal (CC0 1.0) is a public domain dedication tool, often referred to as a "no rights reserved" license. It allows creators to waive all their copyright and related rights over a work, effectively placing it into the public domain.`
  }
  if (license === 'GNU GPLv2') {
    return `## License
    
The GNU General Public License version 2 (GPLv2) is a widely-used open-source software license created by the Free Software Foundation (FSF) as part of the GNU Project. Released in 1991, it is designed to ensure that software licensed under it remains free (as in freedom) for all users and to promote software freedom and sharing through its copyleft principles.`
  }
  if (license === 'GNU GPLv3') {
    return `## License
    The GNU General Public License version 3 (GPLv3) is an open-source software license released by the Free Software Foundation (FSF) in 2007 as a revision to the earlier GPLv2. It was designed to address issues that emerged in the modern software landscape, such as patent risks, hardware restrictions, and legal loopholes, while still maintaining the copyleft principles that ensure software freedom.`
  }
  if (license === 'ISC') {
    return `## License
    The ISC License is a permissive open-source software license created by the Internet Systems Consortium (ISC). It is functionally similar to other permissive licenses like the MIT License or BSD License, offering simple terms and minimal restrictions on how the software can be used, modified, and distributed.`
  }
  if (license === 'MIT') {
    return `## License
    The MIT License is one of the most popular and permissive open-source software licenses. It is designed to be simple, flexible, and easy to understand, allowing developers to use, modify, and distribute software with very few restrictions.`
  }
  if (license === 'Mozilla Public License 2.0') {
    return `## License
   The Mozilla Public License 2.0 (MPL 2.0) is a file-level copyleft open-source license created by the Mozilla Foundation. It balances the freedoms of permissive licenses, like the MIT License, with the copyleft requirements found in stronger licenses, such as the GNU General Public License (GPL). MPL 2.0 ensures that modifications to a licensed file remain open-source but allows developers to combine open-source and proprietary code more flexibly than stricter copyleft licenses.`
  }
  if (license === 'SIL Open Font License 1.1') {
    return `## License
   The SIL Open Font License 1.1 (OFL 1.1) is an open-source license specifically designed for fonts and typefaces. Created by SIL International, a nonprofit organization focused on language and linguistic research, the OFL encourages the widespread use and sharing of fonts, while protecting the rights of creators.`
  }
  if (license === 'Apache License 2.0') {
    return `## License
    The Apache License 2.0 is a widely-used open-source software license developed by the Apache Software Foundation (ASF). It is a permissive license that allows users a high degree of freedom to use, modify, and distribute software, including for commercial purposes.`
  }
}

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


  ${renderLicenseSection(data.license)}

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