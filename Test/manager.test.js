//required manager.js from the library folder
const Manager = require('../library/manager')
//Made a new manager to test each value
const manager = new Manager("Caleb", "3", "caleb@gmail.com", "1234")

describe('Manager', () => {
    it('should get the name, id, and email, and office number of the manager', () => {
        expect(manager.name).toEqual('Caleb')
        expect(manager.id).toEqual('3')
        expect(manager.email).toEqual('caleb@gmail.com')
        expect(manager.officeNumber).toEqual('1234')
    })
});
//This will test if the managers role(), officenumber() return the correct values
it('should get the github of the engineer from the getGithub method', () => {
    expect(manager.getOfficeNumber()).toEqual('1234')
});
it('should get the role of the engineer from the getRole method', () => {
    expect(manager.getRole()).toEqual('Manager')
});