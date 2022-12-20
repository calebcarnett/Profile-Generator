//pulls in the classes from the library folder
const Intern = require("./library/intern");
const Engineer = require("./library/engineer");
const Manager = require("./library/manager");

const fs = require("fs");
const inquirer = require("inquirer");
const generateHTML = require("./src/teamGenerator");

//set an empty array to push the team managers to
var teamArr = [];
//manager prompt with inquirer
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
    //the data is deconstructed and assigned to mngrData, I assign it to a manager constant and push ito the the
    //team arr, had to make sure I returned the teamArr otherwise I could not access the data. I kept getting data
    //undefined before doing this
    .then((mngrData) => {
      const { mngr, mngrID, mngrEmail, mngrOffice } = mngrData;
      const manager = new Manager(mngr, mngrID, mngrEmail, mngrOffice);
      teamArr.push(manager);
      console.log(teamArr);
      return teamArr
      
  
    });
};

//runs the employee prompt for intern and engineer. My tutor showed me how to use the when statement.
//this statement only shows the question if a specific choice is selected form the role prompt
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
//the data is deconstructed and assigned to employeeData
    .then(employeeData => {
      const { role, EName, EID, Eemail, Ischool, Egithub, addAnother } = employeeData;
      //empty variable that will be assigned depending on what role is seleted. If the role is selected a new class is made
      //and is assigned the the empty variable
      let employee;
      if (role === "Engineer") {
        employee = new Engineer(EName, EID, Eemail, Egithub);
        console.log(employee)
      } else if (role === "Intern") {
        employee = new Intern(EName, EID, Eemail, Ischool);
        console.log(employee)
      }
      //the newly added employee is then pushed to the teamArr, if addAnother option is selected it will prompt the user
      // with the original employeePrompt
      teamArr.push(employee);
      if (addAnother) {
        return employeePrompt(teamArr);
      } else {
        return teamArr;
      }
    })
};
//write file is used to creat the team.html file with the data given. 
const writeFile = (data) => {
  fs.writeFile("./dist/team.html", data, error =>
    error ? console.error(error)
      : console.log("Successfully created team.html page!")
  );
};

//I had a tutor and askbcs help me with this portion, I kept getting an erorr until i added the employee prompt in quotes after the mngrprompt
//these call backs decide the order the functions should run
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


