const Engineer = require('../library/engineer')
//Made a new engineer to test each value
const engineer = new Engineer("Caleb", "3", "caleb@gmail.com", "calebcarnett")

describe('Engineer', () => {
    it('should get the name, id, and email, and github of the engineer', () => {
        expect(engineer.name).toEqual('Caleb')
        expect(engineer.id).toEqual('3')
        expect(engineer.email).toEqual('caleb@gmail.com')
        expect(engineer.github).toEqual('calebcarnett')
    })
});
//tests the name, id, email, and github of the employee by running "npm run test" in the command line
//this will test the class engineer and make sure each function returns the correct value
it('should get the github of the engineer from the getGithub method', () => {
    expect(engineer.getGithub()).toEqual('calebcarnett')
});
it('should get the role of the engineer from the getRole method', () => {
    expect(engineer.getRole()).toEqual('Engineer')
});