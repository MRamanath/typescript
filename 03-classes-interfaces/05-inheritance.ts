// ts supports only single inheritance
class Department {
    private employees: string[] = [];

    constructor(private readonly id: number, public name: string) {}

    describe(this: Department) {
        console.log('id: ' + this.id + ' Department: ' + this.name);
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ITDepartment extends Department {
    public admins: string[];
    constructor(id: number, admins: string[]) {
        super(id, 'IT');
        this.admins = admins;
    }
}

class AccountingDepartment extends Department {
    constructor(id: number, private reports: string[] = []) {
        super(id, 'Accounting');
    }

    addReport(text: string) {
        this.reports.push(text);
    }

    printReports() {
        console.log(this.reports);
    }
}

const IT = new ITDepartment(300, ['Suvendu']);
IT.addEmployee('Ramanath');

IT.describe();
IT.printEmployeeInfo();

console.log(IT);

const accounting = new AccountingDepartment(500);
accounting.addReport('great job');
accounting.printReports();

console.log(accounting);