interface Named {
    name?: string;
    outputName?: string;
}
interface Greetings extends Named {
    greet(phrase: string): void;
}

class Person implements Greetings {
    name?: string;

    constructor(name?: string) {
        if (this.name) {
            this.name = name;
        }
    }

    greet(phrase: string): void {
        if (this.name) {
            console.log(phrase + ' ' + this.name);
        } else {
            console.log('Hi there!');
        }
    }
}

let user: Greetings;

user = new Person();
user.name = 'John';
user.greet('Hi there,');