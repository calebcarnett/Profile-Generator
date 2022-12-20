//required the parent class employee from employee.js
const Employee = require('./employee')

//created an engineer class and called the parent class's constructor along with github, super must be
//called before using 'this'
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github
    }
    //function used to return the github of the employee
    getGithub() {
        return this.github
    }
    //function used to show the role of the particular employee
    getRole() {
        return "Engineer"
    }

}
//exports engineer class so i can be ran in the test folder
module.exports = Engineer
