// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
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
        type: " input",
        message: "Please type out a Table of Contents for your readme",
        name: " ToC"
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
        type: "input",
        message: "Please type the License for the readme",
        name: "License"
      },
      {
        type: "input",
        message: "any contributers you'd like to mention in the readme? ",
        name: "contributions"
      },
      {
        type: "input",
        message: "What tests were used?",
        name: " "
      },
      {
        type: "input",
        message: "Please type any questions you woud like in the readme ",
        name: "questions"
      }
    ]
    )
;

.then((response)=>{
  const readme = `

  `

  fs.writeFile("README.md", readme, function(err){
    if(err) {return console.log("error")
  }
    else { console.log("readme file ready!")
  }
  })
}
)


