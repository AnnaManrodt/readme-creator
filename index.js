const inquirer = require("inquirer");
const fs = require("fs");

// Array of questions for user input
inquirer
  .prompt([
    {
      type: "input",
      message: "what is the title of your project?",
      name: "title"
    },
    {
      type: " input",
      message: "Please type a desciption of your project",
      name: "description"
    },
    {
      type: "input",
      message: "Please type instaltion details",
      name: "installation"
    },
    {
      type: "input",
      message: "Please type usage details ",
      name: "usage"
    },
    {
      type: "list",
      message: "Please type the License for the readme",
      choices: ["Apache License 2.0", "MIT license", "BSD 2-Clause", "BSD 3-Clause", "Boost Software License 1.0", "Creative Commons Zero v1.0 ", "Eclipse Public License 1.0", "GNU AFfero General Public License v3.0", "GNU AFfero General Public License v2.0", "Mozilla Public License 2.0", "The Unlicense"],
      name: "license"
    },
    {
      type: "input",
      message: "any contributers you'd like to mention or guild lines for contributions in the readme? ",
      name: "contributing"
    },
    {
      type: "input",
      message: "What tests were used?",
      name: "tests"
    },
    {
      type: "input",
      message: "What is your Github username?",
      name: "username"
    },
    {
      type: "input",
      message: "What is your email?",
      name: "email"
    },
    
  ])
  .then((responses) => {
    // Construct the README content using the user responses

    let licenseBadge = '';
function getLincseBadge(){
  //if statement to detmerin license badge
  if(responses.license == "Apache License 2.0"){
    licenseBadge =` [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  else if(responses.license == "MIT license"){
    licenseBadge =`[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  else if(responses.license == "BSD 2-Clause License"){
    licenseBadge =`[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`
  }
  else if(responses.license == "BSD 3-Clause License"){
    licenseBadge =`[![License](https://img.shields.io/badge/License-BSD_3--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`
  }
  else if(responses.license == "Boost Software License 1.0"){
    licenseBadge =`[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
  }
  else if(responses.license == "Creative Commons Zero v1.0"){
    licenseBadge =`[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)`
  }
  else if(responses.license == "Eclipse Public License 1.0"){
    licenseBadge =`[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`
  }
  else if(responses.license == "GNU AFfero General Public License v2.0"){
    licenseBadge =`[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`
  }
  else if(responses.license == "Mozilla Public License 2.0"){
    licenseBadge =`[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  }
  else if(responses.license == "The Unlicense"){
  licenseBadge =``
  }
  else{
    console.log('please pick valid lincses')
  }
  return licenseBadge;
}
let pickedLicenseBadge = getLincseBadge();
    const readme = `

# ${responses.title} ${pickedLicenseBadge} 
##### ${responses.description}

## Table of Contents 
- [Title](#title)
- [Description](#description)
- [Instaltion](#instaltion)
- [Usage](#usage)
- [Contributions](#contributions)
- [Tests](#tests)
- [License](#license)
- [Questiosn](#questions{})

## Instaltion
##### ${responses.installation}

## Usage
##### ${responses.usage}

## Contributions
##### ${responses.contributing}

## Tests
##### ${responses.tests}

## License
##### ${responses.license}

## Questions
##### For more of my work, checkout my github! ${responses.username} 
##### Any addtional questions? you can reach me at ${responses.email}

`;

    // Write the content to the README.md file
    fs.writeFile("README.md", readme, function(err) {
      if (err) {
        console.error("Error writing file: " + err);
      } else {
        console.log("README file created!");
      }
    });
  });