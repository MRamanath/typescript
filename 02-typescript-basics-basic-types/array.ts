const person: { name: string, age: number, hobbies: string[] } = {
    name: 'John',
    age: 34,
    hobbies: ['cricket', 'football']
};

let myHobbies: string[];
myHobbies = ['hockey'];

let materials: any[];
materials = ['cement', 'bricks', 'tmt bar', true, 123];

console.log(person.name);
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}