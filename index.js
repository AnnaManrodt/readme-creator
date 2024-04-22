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
      name: "Description"
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
      choices: ["Apache License 2.0", "GNU General Public License v3.0", "MIT license", "BSD 2-Clause", "BDS 3-Clause", "Boost Software License 1.0", "Creative Commons Zero v1.0 ", "Eclipse Public License 2.0", "GNU AFfero General Public License v3.0", "GNU AFfero General Public License v2.0", "GNU AFfero General Public License v2.1", "Mozilla Public License 2.0", "The Unlicense"],
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
    const readme = `
# ${responses.title}

##### ${responses.description}

# #table of contents 
- [Title](#title)
- [Description](#description)
- [Instaltion](#instaltion)
- [Usage](#usage)
- [Contributions](#contributions)
- [Tests](#tests)
- [License](#license)
- [Questiosn](#questions)

## Instaltion
##### ${responses.instaltions}

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