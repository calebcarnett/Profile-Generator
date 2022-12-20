//require intern.js from library folder
const Intern = require('../library/intern')
//create a new intern to run the test and make sure the functions return the correct value
const intern = new Intern("Caleb", "3", "caleb@gmail.com", "UTSA")

describe('Intern', () => {
    it('should get the name, id, email, and school of the employee intern', () => {
        expect(intern.name).toEqual('Caleb')
        expect(intern.id).toEqual('3')
        expect(intern.email).toEqual('caleb@gmail.com')
        expect(intern.school).toEqual('UTSA')
    })
});
//tests the name, id, email, and school of the intern by running "npm run test" in the command line
//this will test the class intern and make sure each function returns the correct value
it('should get the school name of the employee from the getSchool method', () => {
    expect(intern.getSchool()).toEqual('UTSA')
});
it('should get the role of the employee from the getRole method', () => {
    expect(intern.getRole()).toEqual('Intern')
});