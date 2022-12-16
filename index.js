const Employee = require('./library/employee')
const Engineer = require('./library/engineer')
const Manager = require('./library/manager')
const fs = require("fs");

var teamArr = []

function makeTeam() {
    var manager = new Manager("Caleb", "3", "caleb@gmail.com", "101")
    var engineer = new Engineer("Jacob", "7", "jacob@gmail.com", "jnordan132")
    teamArr.push(manager)
    teamArr.push(engineer)
    console.table(teamArr)
}


const generateHTMLPAGE = ({}) =>

inquirer
  .prompt([
    {
      type: '',
      message: '',
      name: '',
    },
    {
      type: 'checkbox',
      message: '',
      choices: ["View all Employees","Add an Employee","Exit"],
      name: '',

    },
    {
      type: 'input',
      message: '',
      name: '',
    },
  ])

  .then((answers) => {
    const htmlPage = generateHTMLPAGE(answers);
  fs.writeFile('team.html', htmlPage, (error) =>
  error ? console.error(error) : console.log('Successfully created team.html page!')
);
  })
