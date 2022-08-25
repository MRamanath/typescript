class Department {
    public static fiscalYear = 2020;
    protected employees: string[] = [];

    constructor(private readonly id: number, public name: string) {
        // console.log(Department.fiscalYear); // accesing static property inside 
    }

    describe(this: Department) {
        console.log('id: ' + this.id + ' Department: ' + this.name);
    }

    static createEmployee(name: string) {
        return { name: name };
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
    private lastReport: string;

    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }

        throw new Error('no report found!');
    }

    set mostRecentReport(value: string) {
        if (!value) {
            throw new Error('Pass  in a valid value!');
        }

        this.addReport(value);
    }

    constructor(id: number, private reports: string[] = []) {
        super(id, 'Accounting');
        this.lastReport = reports[0];
    }

    addEmployee(employee: string) {
        if (employee === 'Ramanath') {
            return;
        }
        this.employees.push(employee);
    }

    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }

    printReports() {
        console.log(this.reports);
    }
}

const e1 = Department.createEmployee('Jadyav');
console.log(e1, Department.fiscalYear);
Department.fiscalYear = 2345;
console.log(Department.fiscalYear);

const IT = new ITDepartment(300, ['Suvendu']);
IT.addEmployee('Ramanath');

IT.describe();
IT.printEmployeeInfo();

console.log(IT);

const accounting = new AccountingDepartment(500);
accounting.mostRecentReport = 'new report';
accounting.addEmployee('Ramanath');
accounting.addEmployee('Raman');
accounting.printEmployeeInfo();

accounting.addReport('great job');
accounting.printReports();
console.log(accounting.mostRecentReport);

console.log(accounting);