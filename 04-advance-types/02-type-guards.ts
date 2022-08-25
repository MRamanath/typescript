type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevetedEmployee = Admin & Employee;

const e1: ElevetedEmployee = {
  name: 'John',
  privileges: ['create-server'],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = string | boolean;
type Universal = Combinable & Numeric;

function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }

  return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInfo(employee: UnknownEmployee) {
  console.log('Name ' + employee.name);
  if ('privileges' in employee) {
    console.log('Privileges ' + employee.privileges);
  }

  if ('startDate' in employee) {
    console.log('startDate ' + employee.startDate);
  }
}

printEmployeeInfo(e1);

class Car {
  drive() {
    console.log('Driving car ...');
  }
}

class Truck {
  drive() {
    console.log('Driving truck ...');
  }

  loadCargo(amount: number) {
    console.log('Loading cargo ' + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(3000);
  }
}

useVehicle(v1);
useVehicle(v2);
