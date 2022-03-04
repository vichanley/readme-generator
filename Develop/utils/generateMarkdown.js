const listLicense = ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'];

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license) {
    const badge = license.map(element => {
      return `![alt text](https://img.shields.io/static/v1?label=license&message=${encodeURIComponent(element)}&color=blueviolet)`;
    });

    return badge.join(' ');
  } else {
    return '';
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license==listLicense[0]){
    return `[${listLicense[0]}](https://choosealicense.com/licenses/agpl-3.0/)`
  } else if (license==listLicense[1]){
    return `[${listLicense[1]}](https://choosealicense.com/licenses/gpl-3.0/)`
  } else if (license==listLicense[2]){
    return `[${listLicense[2]}](https://choosealicense.com/licenses/lgpl-3.0/)`
  } else if (license==listLicense[3]){
    return `[${listLicense[3]}](https://choosealicense.com/licenses/mpl-2.0/)`
  } else if (license==listLicense[4]){
    return `[${listLicense[4]}](https://choosealicense.com/licenses/apache-2.0/)`
  } else if (license==listLicense[5]){
    return `[${listLicense[5]}](https://choosealicense.com/licenses/mit/)`
  } else if (license==listLicense[6]){
    return `[${listLicense[6]}](https://choosealicense.com/licenses/bsl-1.0/)`
  } else if (license==listLicense[7]){
    return `[${listLicense[7]}](https://choosealicense.com/licenses/unlicense/)`
  } else {return ''};
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description 
  ${data.description}

  ## Table of Contents 
  *[Installation](#Installation) <br />
  *[Usage](#Usage) <br />
  *[License](#License) <br />
  *[Contributing](#Contributing) <br />
  *[Tests](#Tests) <br />
  *[Questions](#Questions)

  ## Installation 
  ${data.installation}

  ## Usage 
  ${data.usage}

  ## License 
  This application is covered by ${renderLicenseLink(data.license)} <br />
  Click the license name to view the full license and more info.


  ## Contributing 
  ${data.contributors}

  ## Tests 
  ${data.tests}
  
  ## Questions 
  You can find me on GitHub: [${data.username}] (https://github.com/${data.username}) <br />
  You can also e-mail me with any questions at ${data.email} .
`;
}

module.exports = generateMarkdown;
