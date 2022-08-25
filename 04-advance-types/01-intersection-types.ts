type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// interface Admin {
//     name: string;
//     privileges: string[];
// }

// interface Employee {
//     name: string;
//     startDate: Date;
// }

// interface ElevetedEmployee extends Admin, Employee {} // interface multiple inheritance supported

type ElevetedEmployee = Admin & Employee;

const e1: ElevetedEmployee = {
  name: 'John',
  privileges: ['create-server'],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = string | boolean;
type Universal = Combinable & Numeric;
