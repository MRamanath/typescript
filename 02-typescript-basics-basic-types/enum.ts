// const ADMIN = 0;
// const AUTHOR = 1;
// const READ_ONLY = 2;

// const person = {
//     name: 'John',
//     age: 34,
//     hobbies: ['cricket', 'football'],
//     role: READ_ONLY 
// };

// if (person.role === READ_ONLY) {
//     console.log('read only');
// }

// enum Role {
//     ADMIN = 7, AUTHOR, READ_ONLY
// }

// enum Role {
//     ADMIN = 'KING', AUTHOR = 100, READ_ONLY = 200
// }
    
enum Role {
    ADMIN, AUTHOR, READ_ONLY
}

const person = {
    name: 'John',
    age: 34,
    hobbies: ['cricket', 'football'],
    role: Role.ADMIN 
};

if (person.role === Role.AUTHOR) {
    console.log('is author');
}