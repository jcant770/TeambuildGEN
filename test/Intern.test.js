const Intern = require('../lib/Intern');

describe("Intern1", () => {
    it("should check that the entries are made", () => {
        const intern = new Intern('Jorge', 25, 'cantoj515@gmail.com', 'Michigan State');

        expect(intern.school).toEqual(expect.any(String));
    });
});

describe("Intern", () => {
    describe("getschool", () => {
        it("should get the github", () => {
            const intern = new Intern('Jorge', 25, 'cantoj515@gmail.com');

            expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
        });
    });

    describe("getrole", () => {
        it("should get the Intern role", () => {
            const intern = new Intern('Jorge', 25, 'cantoj515@gmail.com');

            expect(intern.getRole()).toEqual("Intern");
        });
    });
});