// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT'){
    return `[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)
    [MIT link](https://opensource.org/licenses/MIT)
    `

    
  } else if (license === "GPL") {
    return `[![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)](http://perso.crans.org/besson/LICENSE.html)
    [GPL link](https://www.gnu.org/licenses/gpl-3.0.en.html)
    `
  } else if (license === "CC-0") {
    return `[![CC-0 license](https://img.shields.io/badge/License-CC--0-blue.svg)](https://creativecommons.org/licenses/by-nd/4.0)
    [CC-0 link](https://creativecommons.org/publicdomain/zero/1.0/)
    `
  } else {
    return ''
  }
};


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}

  # Description
  ${data.Description}

  # Table of Content
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)

  ## Installation
  ${data.Installation}

  ## Usage 
  ${data.Usage}

  ## Credits
  ${data.Contributing}

  ## Liscence
  ${data.License}
  ${renderLicenseBadge(data.License)}


  ## Tests
  ${data.Tests}

  ## Questions
  ${data.Questions}

  ## Contact
  ${data.Username}
  ${data.Email}

`;
}

module.exports = generateMarkdown;
