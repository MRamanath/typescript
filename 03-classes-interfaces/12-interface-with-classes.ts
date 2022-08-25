// interface is used to define the object;
// interface can be used as type;
// interface allow us to define structure of an object : interface vs type (important)

interface Greetings {
    name: string;

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

let user: Greetings; // Person can also be used

user = new Person('Ramanath');

user.greet('Hi there,');