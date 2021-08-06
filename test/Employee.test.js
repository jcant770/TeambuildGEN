const Employee = require('../lib/Employee');

describe("Employee1", () => {
    it ("should check that entries are made", () => {
        const employee = new Employee('Jorge', 25, 'cantoj515@gmail.com');

        expect(employee.name).toEqual(expect.any(String));
        expect(employee.id).toEqual(expect.any(Number));
        expect(employee.email).toEqual(expect.any(String));
    })
})

describe("Employee", () => {
    describe("getname", () => {
        it("should get the employee name", () => {
            const employee = new Employee('Jorge', 25, 'cantoj515@gmail.com');

            expect(employee.getname()).toEqual(expect.any(String));
        });
    });

    describe("getemail", () => {
        it("should get the email", () => {
            const employee = new Employee('Jorge', 25, 'cantoj515@gmail.com');

            expect(employee.getemail()).toEqual(expect.stringContaining(employee.email.toString()));
        });
    });

    describe("getid", () => {
        it("should get the employee id", () => {
            const employee = new Employee('Jorge', 25, 'cantoj515@gmail.com');

            expect(employee.getid()).toEqual(expect.any(Number));
        });
    });

    describe("getrole", () => {
        it("should get the employee role", () => {
            const employee = new Employee('Jorge', 25, 'cantoj515@gmail.com');

            expect(employee.getRole()).toEqual("Employee");
        });
    });
});