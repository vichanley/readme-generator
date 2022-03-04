// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license) {
    const badge = license.map(element => {
      return `![alt text](https://img.shields.io/static/v1?label=licence&message=${encodeURIComponent(element)}&color=GREEN)`;
    });

    return badge.join(' ');
  } else {
    return '';
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license){
    return '[Link to License] (../src/' + encodeURIComponent(license) + '.txt)'
  } else {return ''};
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license){
    return '
  } else {return ''};
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description 
  ${data.description}

  ## Table of Contents 
  *[Installation](#Installation)
  *[Usage](#Usage)
  *[License](#License)
  *[Contributing](#Contributing)
  *[Tests](#Tests)
  *[Questions](#Questions)

  ## Installation 
  ${data.installation}

  ## Usage 
  ${data.usage}

  ## License 
  ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)
  <br />
  This application is covered by the ${data.license} license. 

  ## Contributing 
  ${data.contributors}

  ## Tests 
  ${data.tests}
  
  ## Questions 
  You can find me on GitHub: [${data.username}] (https://github.com/${data.username})
  You can also e-mail me with any questions at ${data.email} .
`;
}

module.exports = generateMarkdown;
