//required the parent class employee from employee.js
const Employee = require('./employee')
//created an intern class and called the parent class's constructor along with school, super must be
//called before using 'this'
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school
    }
    //function to return the school of the intern
    getSchool() {
        return this.school
    }
        //function to return the role of the intern
    getRole() {
        return "Intern"
    }

}
//exports intern class so i can be ran in the test folder
module.exports = Intern