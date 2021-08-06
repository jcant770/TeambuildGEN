class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.email = email;
        this.id = id;
    }

    getname () {
        return this.name;
    }

    getemail () {
        return this.email;
    }

    getid () {
        return this.id;
    }

    getRole () {
       return  "Employee";
    }
};

module.exports = Employee;