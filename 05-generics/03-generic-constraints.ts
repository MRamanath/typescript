// can extends any available type like string, boolean, array, custom type etc.

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

console.log(merge({ name: 'John' }, { age: 13 }));

const merged1 = merge(
  { name: 'John', hobbies: ['cricket', 'football'] },
  { age: 13 }
);

console.log(merged1.age);
