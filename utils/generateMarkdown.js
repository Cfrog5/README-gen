// function to render license bade if a choice is chosen
function renderLicenseBadge(license) {
if (license !== "None") { 
  return `[![${license} license](https://img.shields.io/badge/License-${license}-blue.svg)](${renderLicenseLink(license)})`;
} else {
  return ``
  }
}

//function returns link depending on users license
function renderLicenseLink(license) {
  if (license == "Apache") {
    return `https://www.apache.org/licenses/LICENSE-2.0`
  }
  if (license == "MIT") {
    return `https://opensource.org/license/mit/`
  }
  if (license == "Boost") {
    return `https://www.boost.org/LICENSE_1_0.txt`
  }
}

//function to generate README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  ## Table of Contents
  -[Installation](#installation)\n
  -[Usage](#usage)\n
  -[Credits](#credits)\n
  -[Contributing](#contributing)\n
  -[Tests](#tests)\n
  -[License](#license)\n
  -[Questions](#questions)\n
  ## Instalation
  ${data.usage}
  ## Usage
  ${data.usage}
  ## License
  This application is protected under the [${data.license}](${renderLicenseLink(data.license)}) license. Click the link to learn more.
  ## Contributing 
  ${data.contribute}
  ## Tests
  ${data.tests}
  ## Questions
  For additional questions you can contact me at:\n
  GitHub: [${data.git}](https://github.com/${data.git})\n
  E-Mail: [${data.mail}](mailto:${data.mail})
  ## Credits
  ${data.credits}
`;
}

module.exports = generateMarkdown;
