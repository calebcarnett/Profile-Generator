
//required the parent class employee from employee.js
const Employee = require('./employee')
//created an intern class and called the parent class's constructor along with school, super must be
//called before using 'this'
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber
    }
    getOfficeNumber() {
        return this.officeNumber
    }
    getRole() {
        return "Manager"
    }
}
//exports manager class so i can be ran in the test folder
module.exports = Manager