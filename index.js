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





