const person: { name: string, age: number, hobbies: string[], role: [number, string] } = {
    name: 'John',
    age: 34,
    hobbies: ['cricket', 'football'],
    role: [1, 'author'] // tuple type
};

// person.role.push('admin'); // allowed but strange behaviour
// person.role[1] = 'aaa';
// person.role = [0, 'admin', 'user']; // not allowed

console.log(person.role);