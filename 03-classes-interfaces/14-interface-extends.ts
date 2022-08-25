interface Named {
    readonly name: string;
}

interface Age {
    readonly age: number;
}

interface Greetings extends Named {
    greet(phrase: string): void;
}

class Person implements Greetings, Age {
    name: string;
    age: number;

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