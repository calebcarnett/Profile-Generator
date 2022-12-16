const Intern = require("./library/intern");
const Engineer = require("./library/engineer");
const Manager = require("./library/manager");
const fs = require("fs");
const inquirer = require("inquirer");
const generateHTML = require("./src/generateHTML");

var teamArr = [];

// function makeTeam() {
//   var manager = new Manager("Caleb", "3", "caleb@gmail.com", "101");
//   var engineer = new Engineer("Jacob", "7", "jacob@gmail.com", "jnordan132");
//   var intern = new Intern("hunter", "10", "hunter@gmail.com", "UTSA");
//   teamArr.push(manager);
//   teamArr.push(engineer);
//   teamArr.push(intern);
//   console.table(teamArr);
// }

// makeTeam()

// const generateHTMLPAGE = ({}) =>

const mngrPrompt = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        message: "Enter team managers name",
        name: "mngr",
      },
      {
        type: "number",
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
    });
};
// mngrPrompt()

const employeePrompt = () => {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What is this employes role?",
        name: "role",
        choices: ["Engineer", "Intern"],
      },
      {
        type: "number",
        message: "Enter employee name",
        name: "EName",
      },
      {
        type: "number",
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
      },
    ])
    .then((employeeData) => {
      const { role, EName, EID, Eemail, Ischool, Egithub } = employeeData;
      let employee;
      if (role === "Engineer") {
        employee = new Engineer(EName, EID, Eemail, Egithub);
      } else if (role === "Intern") {
        employee = new Intern(EName, EID, Eemail, Ischool);
      }
      teamArr.push(employee);
      if (addAnother) {
        return employeePrompt(teamArr);
      } else {
        return teamArr;
      }
    });
};

const createHTML = (data) => {
  console.log(data);
  fs.writeFile("./dist/team.html", data, (error) =>
    error
      ? console.error(error)
      : console.log("Successfully created team.html page!")
  );
};

mngrPrompt()
  //  .then(employeePrompt)
  .then((teamArr) => {
    return generateHTML(teamArr);
  })
  .then((teamPage) => {
    return createHTML(teamPage);
  })
  .catch((err) => {
    console.log(err);
  });

// {
//   type: 'checkbox',
//   message: 'Select an employee or finish building your team',
//   choices: ["Add Engineer","Add Intern","I am finished building my team"],
//   name: 'menu',
// },

//   .then((responses) => {
//     const htmlPage = generateHTMLPAGE(responses);
//   fs.writeFile('./dist/team.html', htmlPage, (error) =>
//   error ? console.error(error) : console.log('Successfully created team.html page!')
// );
//   })
//   inquirer.prompt([
//     {
//       type: 'number',
//       message: 'Enter interns name',
//       name: 'IName',
//     },
//     {
//         type: 'number',
//         message: 'Enter interns ID number',
//         name: 'IID',
//       },
//       {
//         type: 'input',
//         message: 'Enter the interns email',
//         name: 'Iemail',
//       },
//       {
//         type: 'input',
//         message: 'Enter the interns school',
//         name: 'Ischool',
//       },
//   ])
//   }
// }
