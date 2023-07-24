// returns a license badge based on which license is passed in
// If there is no license, returns an empty string
function renderLicenseBadge(license) {
  if(license === 'none'){
    return '';
  }
  else {
    return `https://img.shields.io/badge/License-${license}-blue.svg`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  
}

// returns the license section of README
// If there is no license, returns an empty string
function renderLicenseSection(license) {
  if(license == 'none'){
    return ``;
  }
  else {
    return `## License

    Licensed under [${data.license}](LICENSE)`;
  }
}

// generates markdown for README
function generateMarkdown(data) {


  return `# ${data.title} ${renderLicenseLink(data.license)}


  ## Description

  ${data.description}


  ## Installation

  ${data.installation}


  ## Usage

  ${data.usage}


  ## Contributing

  ${data.contributing}


  ## Tests

  ${data.tests}


  ## Questions

  Github: [${data.github}](${data.github !== 'N/A' ? 'https://github.com/' + data.github : data.github})
  For any questions please reach out to me at ${data.email}.


  ${renderLicenseSection(data.license)}

`;
}

module.exports = generateMarkdown;
