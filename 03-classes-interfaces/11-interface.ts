// interface is used to define the object;
// interface can be used as type;
// interface allow us to define structure of an object

interface Person {
    name: string;
    age: number;

    greet(phrase: string): void;
}

let person: Person;

person = {
    name: 'John',
    age: 36,
    greet(phrase: string) {
        console.log(phrase + ' ' + this.name);
    }
}

person.greet('Hi there,');