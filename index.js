const Intern = require("./library/intern");
const Engineer = require("./library/engineer");
const Manager = require("./library/manager");

const fs = require("fs");
const inquirer = require("inquirer");
const generateHTML = require("./src/teamGenerator");


var teamArr = [];

const mngrPrompt = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        message: "Enter team managers name",
        name: "mngr",
      },
      {
        type: "input",
        message: "Enter the team managers ID number",
        name: "mngrID",
      },
      {
        type: "input",
        message: "Enter the team managers email address",
        name: "mngrEmail",
      },
      {
        type: "input",
        message: "Enter the team managers office number",
        name: "mngrOffice",
      },

    ])
    .then((mngrData) => {
      const { mngr, mngrID, mngrEmail, mngrOffice } = mngrData;
      const manager = new Manager(mngr, mngrID, mngrEmail, mngrOffice);
      teamArr.push(manager);
      console.log(teamArr);
      return teamArr
      
  
    });
};


const employeePrompt = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        message: "What is this employees role?",
        name: "role",
        choices: ["Engineer", "Intern"],
      },
      {
        type: "input",
        message: "Enter employee name",
        name: "EName",
      },
      {
        type: "input",

        message: "Enter employee ID number",
        name: "EID",
      },
      {
        type: "input",
        message: "Enter the employee email",
        name: "Eemail",
      },
      {
        type: "input",
        message: "Enter the interns school",
        name: "Ischool",
        when: (input) => input.role === "Intern",
      },
      {
        type: "input",
        message: "Enter the Engineers github username",
        name: "Egithub",
        when: (input) => input.role === "Engineer",
      },
      {
        type: "confirm",
        message: "Would you like to add another employee?",
        name: "addAnother",
        default: false
      },
    ])

    .then(employeeData => {
      const { role, EName, EID, Eemail, Ischool, Egithub, addAnother } = employeeData;
      let employee;
      if (role === "Engineer") {
        employee = new Engineer(EName, EID, Eemail, Egithub);
        console.log(employee)
      } else if (role === "Intern") {
        employee = new Intern(EName, EID, Eemail, Ischool);
        console.log(employee)
      }
      teamArr.push(employee);
      if (addAnother) {
        return employeePrompt(teamArr);
      } else {
        return teamArr;
      }
    })
};

const writeFile = (data) => {
  fs.writeFile("./dist/team.html", data, error =>
    error ? console.error(error)
      : console.log("Successfully created team.html page!")
  );
};

mngrPrompt()
.then(employeePrompt).then(teamArr => {
    return generateHTML(teamArr);
  }) 
  .then(data => {
    return writeFile(data);
  })
  .catch((err) => {
    console.log(err);
  });


