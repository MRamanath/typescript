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

function add(a: number): number;
function add(a: number, b: number): number;
function add(a: string): string;
function add(a: string, b: string): string;

function add(a: Combinable, b?: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    if (b) {
      return a.toString() + b.toString();
    }
    return a.toString();
  }

  if (a && b) {
    return a + b;
  }

  return a;
}

// const result = add('Ramanath', ' Mandal') as string;
// result.split(' ');

const result = add('Ramanath', ' Mandal');
console.log(result);
const result3 = add('Ramanath');
console.log(result3);
const result1 = add(12, 23);
console.log(result1);
const result2 = add(12);
console.log(result2);
