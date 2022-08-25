class Department {
    // private readonly id: number;
    private employees: string[] = [];

    constructor(private readonly id: number, public name: string) {}

    describe(this: Department) {
        console.log('id: ' + this.id + ' Department: ' + this.name);
    }

    addEmployee(employee: string) {
        // this.id = 200; // not allowed since it is readonly
        this.employees.push(employee);
    }

    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

const accounting = new Department(100, 'Accounting');
accounting.addEmployee('Ramanath');

accounting.describe();
accounting.printEmployeeInfo();