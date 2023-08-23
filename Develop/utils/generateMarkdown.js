// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "No License") return "";
  return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "No License") return "";
  return (
      `\n* [License](#license)\n`
  );
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "No License") return "";
  return (
      `## License\nThis project is licensed under the ${license} License.`
  );
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
${renderLicenseLink(data.license)}
* [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

${renderLicenseSection(data.license)}

## Questions
If you have any questions, please feel free to [contact me](mailto:${data.email}). You can see more of my work at [${data.github}](https://github.com/${data.github}).
`;
}

module.exports = generateMarkdown;
