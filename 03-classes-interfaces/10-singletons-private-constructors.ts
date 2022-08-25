abstract class Department {
    public static fiscalYear = 2020;
    protected employees: string[] = [];

    constructor(protected readonly id: number, public name: string) {}

    abstract describe(this: Department): void;

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

    describe() {
        console.log(`Department - (${this.id}): IT`);
    }
}

class AccountingDepartment extends Department {
    private lastReport: string;
    private static instance: AccountingDepartment;

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

    private constructor(id: number, private reports: string[] = []) {
        super(id, 'Accounting');
        this.lastReport = reports[0];
    }

    static getInstance(): AccountingDepartment {
        if (AccountingDepartment.instance) {
            return this.instance;
        }

        this.instance = new AccountingDepartment(500);
        return this.instance;
    }

    describe() {
        console.log(`Department - (${this.id}): Accounting`);
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

// note: abstract class cant be instantiated directly
const e1 = Department.createEmployee('Jadyav');
console.log(e1, Department.fiscalYear);
Department.fiscalYear = 2345;
console.log(Department.fiscalYear);

const IT = new ITDepartment(300, ['Suvendu']);
IT.addEmployee('Ramanath');

IT.describe();
IT.printEmployeeInfo();
console.log(IT);

IT.describe();

// const accounting = new AccountingDepartment(500);
const accounting1 = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();

accounting1.mostRecentReport = 'new report';
accounting1.addEmployee('Ramanath');
accounting1.addEmployee('Raman');
accounting1.printEmployeeInfo();

accounting1.addReport('great job');
accounting1.printReports();
console.log(accounting1.mostRecentReport);
accounting1.describe();

console.log(accounting1);
console.log(accounting2);
