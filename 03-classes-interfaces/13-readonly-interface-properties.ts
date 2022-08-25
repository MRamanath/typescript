// interface is used to define the object;
// interface can be used as type;
// interface allow us to define structure of an object : interface vs type (important)

interface Greetings {
    readonly name: string;

    greet(phrase: string): void;
}

class Person implements Greetings {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    greet(phrase: string): void {
        console.log(phrase + ' ' + this.name);
    }
}

let user: Greetings;

user = new Person('Ramanath');
// user.name = 'Ramanath2'; //cant be assigned because it is readonly
user.greet('Hi there,');