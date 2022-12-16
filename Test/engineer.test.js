const Engineer = require('../library/engineer')

const engineer= new Engineer("Caleb", "3", "caleb@gmail.com", "calebcarnett")

describe('Engineer', () => {
    it('should get the name, id, and email, and github of the engineer', () => {
        expect(engineer.name).toEqual('Caleb')
        expect(engineer.id).toEqual('3')
        expect(engineer.email).toEqual('caleb@gmail.com')
        expect(engineer.github).toEqual('calebcarnett')
    })
});

it('should get the github of the engineer from the getGithub method', () => {
    expect(engineer.getGithub()).toEqual('calebcarnett')
});
it('should get the role of the engineer from the getRole method', () => {
    expect(engineer.getRole()).toEqual('Engineer')
});