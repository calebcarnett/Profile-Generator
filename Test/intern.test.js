const Intern = require('../library/intern')

const intern = new Intern("Caleb", "3", "caleb@gmail.com", "UTSA")

describe('Intern', () => {
    it('should get the name, id, email, and school of the employee intern', () => {
        expect(intern.name).toEqual('Caleb')
        expect(intern.id).toEqual('3')
        expect(intern.email).toEqual('caleb@gmail.com')
        expect(intern.school).toEqual('UTSA')
    })
});

it('should get the school name of the employee from the getSchool method', () => {
    expect(intern.getSchool()).toEqual('UTSA')
});
it('should get the role of the employee from the getRole method', () => {
    expect(intern.getRole()).toEqual('Intern')
});