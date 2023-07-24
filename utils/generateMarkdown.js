// license links
let links = ['none', 'none',
  'MIT', 'https://opensource.org/license/mit/',
  'Academic Free License v3.0', 'https://opensource.org/license/afl-3-0-php/',
  'Apache license 2.0', 'https://opensource.org/license/apache-2-0/',
  'Artistic license 2.0',	'https://opensource.org/license/artistic-2-0/',
  'Boost Software License 1.0',	'https://opensource.org/license/bsl-1-0/',
  'BSD 2-clause "Simplified" license',	'https://opensource.org/license/bsd-2-clause/',
  'BSD 3-clause "New" or "Revised" license',	'https://opensource.org/license/bsd-3-clause/',
  'BSD 3-clause Clear license', 'https://spdx.org/licenses/BSD-3-Clause-Clear.html',
  'BSD 4-clause "Original" or "Old" license', 'https://spdx.org/licenses/BSD-4-Clause.html',
  'BSD Zero-Clause license', 'https://opensource.org/license/0bsd/',
  'Creative Commons license', 'https://creativecommons.org/publicdomain/zero/1.0/',
  'Creative Commons Zero v1.0 Universal', 'https://creativecommons.org/publicdomain/zero/1.0/',
  'Creative Commons Attribution 4.0', 'https://creativecommons.org/licenses/by/4.0/',
  'Creative Commons Attribution Share Alike 4.0', 'https://creativecommons.org/licenses/by-sa/4.0/',
  'Do What The F*ck You Want To Public License', 'http://www.wtfpl.net/about/',
  'Educational Community License v2.0', 'https://opensource.org/license/ecl-2-0/',
  'Eclipse Public License 1.0', 'https://opensource.org/license/epl-1-0/',
  'Eclipse Public License 2.0', 'https://opensource.org/license/epl-2-0/',
  'European Union Public License 1.1', 'https://spdx.org/licenses/EUPL-1.1.html',
  'GNU Affero General Public License v3.0', 'https://opensource.org/license/agpl-v3/',
  'GNU General Public License family', 'https://opensource.org/license/gpl-1-0/',
  'GNU General Public License v2.0', 'https://opensource.org/license/gpl-2-0/',
  'GNU General Public License v3.0', 'https://opensource.org/license/gpl-3-0/',
  'GNU Lesser General Public License family', 'https://opensource.org/license/lgpl-license-html/',
  'GNU Lesser General Public License v2.1', 'https://opensource.org/license/lgpl-2-1/',
  'GNU Lesser General Public License v3.0', 'https://opensource.org/license/lgpl-3-0/',
  'ISC', 'https://opensource.org/license/isc-license-txt/',
  'LaTeX Project Public License v1.3c', 'https://opensource.org/license/lppl/',
  'Microsoft Public License', 'https://opensource.org/license/ms-pl-html/',
  'Mozilla Public License 2.0', 'https://opensource.org/license/mpl-2-0/',
  'Open Software License 3.0', 'https://opensource.org/license/osl-3-0-php/',
  'PostgreSQL License', 'https://opensource.org/license/postgresql/',
  'SIL Open Font License 1.1', 'https://opensource.org/license/ofl-1-1/',
  'University of Illinois/NCSA Open Source License', 'https://opensource.org/license/uoi-ncsa-php/',
  'The Unlicense', 'https://opensource.org/license/unlicense/',
  'zLib License', 'https://opensource.org/license/zlib/']

// returns a license badge based on which license is passed in
// If there is no license, returns an empty string
function renderLicenseBadge(license) {
  if(license === 'none'){
    return '';
  }
  else {
    return `https://img.shields.io/badge/License-${license.replace(/ /g, "_")}-blue.svg`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let index = links.indexOf(license);
  let licLink = links[index + 1];

  if(license === 'none'){
    return ``;
  }
  // adds link to badge in markdown
  else {
    return `[![License: ${license}](${renderLicenseBadge(license)})](${licLink})`;
  }
}

// returns the license section of README
// If there is no license, returns an empty string
function renderLicenseSection(license) {
  if(license == 'none'){
    return ``;
  }
  else {
    return `## License <a id="license"></a>

  Licensed under [${license}](LICENSE)`;
  }
}

// generates markdown for README
function generateMarkdown(data) {


  return `# ${data.title} ${renderLicenseLink(data.license)}


  ## Description

  ${data.description}


  ## Table of Contents

  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [Contributing](#contributing)
  4. [Tests](#tests)
  5. [Questions](#questions)
  6. [License](#license)


  ## Installation <a id="installation"></a>

  ${data.installation}


  ## Usage <a id="usage"></a>

  ${data.usage}


  ## Contributing <a id="contributing"></a>

  ${data.contributing}


  ## Tests <a id="tests"></a>

  ${data.tests}


  ## Questions <a id="questions"></a>

  Github: [${data.github}](${data.github !== 'N/A' ? 'https://github.com/' + data.github : data.github})
  
  For any questions please reach out to me at ${data.email}.


  ${renderLicenseSection(data.license)}

`;
}

module.exports = {
  generateMarkdown : generateMarkdown
};
