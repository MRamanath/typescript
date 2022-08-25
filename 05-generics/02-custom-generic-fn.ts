function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

console.log(merge({ name: 'John' }, { age: 13 }));

const merged1 = merge(
  { name: 'John', hobbies: ['cricket', 'football'] },
  { age: 13 }
);

console.log(merged1.age);

const merged = merge<{ name: string; hobbies: string[] }, { age: number }>(
  { name: 'John', hobbies: ['cricket', 'football'] },
  { age: 13 }
);
console.log(merged.name);

interface Countable {
  length: number;
}

const countAndDescribe = <T extends Countable>(element: T): [T, string] => {
  let desc = 'Got no element';
  if (element.length === 1) {
    desc = 'Got 1 elements';
  } else if (element.length > 1) {
    desc = 'Got ' + element.length + ' elements';
  }

  return [element, desc];
};

console.log(countAndDescribe('Hi there!'));
console.log(countAndDescribe(['sports', 'football']));
console.log(countAndDescribe([]));

