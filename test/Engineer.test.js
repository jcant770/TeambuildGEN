const Engineer = require('../lib/Engineer');

describe("Engineer1", () => {
    it("should check that the entries are made", () => {
        const engineer = new Engineer('Jorge', 25, 'cantoj515@gmail.com', 'canto717');

        expect(engineer.github).toEqual(expect.any(String));
    });
});

describe("Engineer", () => {
    describe("getGithub", () => {
        it("should get the github", () => {
            const engineer = new Engineer('Jorge', 25, 'cantoj515@gmail.com', 'canto717');

            expect(engineer.getgithub()).toEqual(expect.stringContaining(engineer.github.toString())); 
        });
    });

    describe("getrole", () => {
        it("should get the engineer role", () => {
            const engineer = new Engineer('Jorge', 25, 'cantoj515@gmail.com', 'canto717');

            expect(engineer.getRole()).toEqual("Engineer");
        });
    });
});

