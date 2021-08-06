const Manager = require('../lib/Manager');

describe("Manager1", () => {
    it("should check that the entries are made", () => {
        const manager = new Manager('Jorge', 25, 'cantoj515@gmail.com', '7');

        expect(manager.officeNumber).toEqual(expect.any(Number));
    });
});

describe("getrole", () => {
    it("should get the manager role", () => {
        const manager = new Manager('Jorge', 25, 'cantoj515@gmail.com', '7');

        expect(manager.getRole()).toEqual("Manager");
    });
});